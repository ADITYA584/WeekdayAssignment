import React, { useState, useEffect } from "react";
import JobCard from "./Components/JobCard";
import SearchBar from "./Components/SearchBar";
import SimpleBackdrop from "./Components/Loader";

const JobSection = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [isLoading, setisLoading] = useState(false);

  const [role, setRole] = useState("");
  const [minExp, setMinExp] = useState("");
  const [minSal, setMinSal] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");

  // Change handlers being send to SearchBar component

  const roleChangeHandler = (e) => {
    setRole(e.target.value);
    // console.log(e.target.value);
  };
  const minExpChangeHandler = (e) => {
    setMinExp(e.target.value);
  };
  const minSalChangeHandler = (e) => {
    setMinSal(e.target.value);
  };
  const locationChangeHandler = (e) => {
    setLocation(e.target.value);
  };
  const companyChangeHandler = (e) => {
    setCompany(e.target.value);
  };

  // --------------------API call to FETCHDATA  data
  const FetchData = () => {
    setisLoading(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ limit: 10, offset: page }),
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        firstLoad
          ? setData([...result.jdList])
          : setData((prev) => [...prev, ...result.jdList])
      )
      .catch((error) => console.error(error));

    setFirstLoad(false);
    setTimeout(() => {
      setisLoading(false);
    }, 100);
  };

  // --------------------Infinete Scroll Handler --------------------------
  const HandleInfiniteScrolling = () => {
    const scrollY = window.innerHeight + document.documentElement.scrollTop + 1;
    const docHeight = document.documentElement.scrollHeight;
    if (scrollY > docHeight) {
      setisLoading(true);
      setPage((prevPage) => prevPage + 10);
    }
  };

  // ------------------------Window Scroll Event Listener-------------------
  useEffect(() => {
    window.addEventListener("scroll", HandleInfiniteScrolling);
    return () => {
      window.removeEventListener("scroll", HandleInfiniteScrolling);
    };
  }, []);

  useEffect(() => {
    FetchData(); // Fetch additional data when page changes
  }, [page]);

  return (
    <React.Fragment>
      <SimpleBackdrop open={isLoading}></SimpleBackdrop>
      <SearchBar
        roleChangeHandler={roleChangeHandler} // ON Role change handler
        minExpChangeHandler={minExpChangeHandler} //ON Experience change handler
        minSalChangeHandler={minSalChangeHandler} //ON SALARY change handler
        locationChangeHandler={locationChangeHandler} //ON location change
        companyChangeHandler={companyChangeHandler} //on company Change
        role={role}
        minExp={minExp}
        location={location}
        company={company}
        minSal={minSal}
      />

      {/* -------------jOBS dISPLAY Section ------------------- */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 p-4 mx-auto gap-10 w-full h-full">
        {data
          ?.filter((item) => {
            return (
              (!company ||
                item.companyName
                  .toLowerCase()
                  .includes(company.toLowerCase())) &&
              (!role ||
                item.jobRole.toLowerCase().includes(role.toLowerCase())) &&
              (!minExp || item.minExp >= parseInt(minExp)) &&
              (!minSal || item.minJdSalary >= parseInt(minSal)) &&
              (!location ||
                item.location.toLowerCase().includes(location.toLowerCase()))
            );
          })
          .map((item, index) => (
            <JobCard
              key={index}
              JobTitle={item.jobRole.toUpperCase()}
              CompanyName={item.companyName}
              Location={item.location.toUpperCase()}
              Description={item.jobDetailsFromCompany}
              Experience={`${item.minExp ? item.minExp : ""} - ${
                item.maxExp ? item.maxExp : ""
              }`}
              DatePosted={item.DatePosted}
              ExpectedSalary={`${
                item.minJdSalary ? item.minJdSalary + "K" : ""
              } - ${item.maxJdSalary ? item.maxJdSalary + "K" : ""}`}
              Logo={item.logoUrl}
              currency={item.salaryCurrencyCode}
              applylink={item.jdLink}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default JobSection;
