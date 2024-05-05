import React from "react";
import JobsData from "./Components/DummyData";
import JobCard from "./Components/JobCard";
import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";

const JobSection = () => {
  const [data, setData] = useState([]);

  const FetchData = (type) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
      limit: 10,
      offset: 0,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        type === "First"
          ? setData([...result.jdList])
          : setData((prev) => [...prev, ...result.jdList])
      )
      .catch((error) => console.error(error));
  };

  const HandleInfiniteScolling = async () => {
    const DocHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    const ScrollableHeight = document.documentElement.scrollTop;
    try {
      if (viewportHeight + ScrollableHeight + 1 >= DocHeight) FetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => FetchData("First"), []);

  useEffect(() => {
    window.addEventListener("scroll", HandleInfiniteScolling);
  }, []);

  // companyName: "Dropbox";
  // jdLink: "https://weekday.works";
  // jdUid: "cfff35ac-053c-11ef-83d3-06301d0a7178-92010";
  // jobDetailsFromCompany: "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.";
  // jobRole: "frontend";
  // location: "delhi ncr";
  // logoUrl: "https://logo.clearbit.com/dropbox.com";
  // maxExp: 6;
  // maxJdSalary: 61;
  // minExp: 3;
  // minJdSalary: null;
  // salaryCurrencyCode: "USD";
  return (
    <React.Fragment>
      <SearchBar />
      <div className=" grid grid-cols-3 p-4 mx-auto gap-10 w-full h-full">
        {console.log(data)}
        {data.map((item, index) => {
          return (
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
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default JobSection;
