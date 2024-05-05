import React from "react";

// {
//     JobTitle: "DevOps Engineer",
//     CompanyName: "Cloud Solutions Ltd.",
//     Location: "Bangalore, India",
//     JobDescription: "Automating deployment and infrastructure management",
//     ExperienceRequired: "4-6 years",
//     DatePosted: "10 days ago",
//     ExpectedSalary: "30-40 LPA",
//   }

const JobCard = (props) => {
  return (
    <React.Fragment>
      <div className=" rounded-xl outline-2 outline-black  p-6 text-md w-full max-h-full font-semibold shadow-lg hover:shadow-xl hover:scale-[1.01] duration-300 ">
        <div className="mb-3">
          <p className=" m-1 ">
            <span className="border-2 p-2 rounded-full text-[0.7rem]">
              Posted ⌛{Math.ceil(Math.random() * 10)} days ago
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 p-2 my-2">
            <div className="w-[70px] flex items-center ">
              <img alt="company" src={props.Logo} />
            </div>

            <div>
              <p className="text-lg">{props.CompanyName}</p>
              <p className="text-sm">{props.JobTitle}</p>
              <p className="font-bold">{props.Location}</p>
            </div>
          </div>
          <p className="font-semibold">{`Estimated Salary ${props.ExpectedSalary} ${props.currency} ✅`}</p>
          <p className="font-bold my-3">About Company :</p>
          <div>
            <p className="font-bold">About us </p>
            <div
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: " #3B82F6 white",
              }}
              className={"py-3 h-[150px] overflow-y-auto  "}
            >
              {props.Description}
            </div>
            <div>
              <p className="font-bold mt-3">Minimum Experience</p>
              <div>
                <p className="mb-3">{`${props.Experience} ${
                  props.Experience.length == 0 ? "" : "Years"
                }`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col font-bold gap-4">
          <a href={props.applylink} target="#">
            <button className="w-full p-2 rounded-md bg-green-400">
              ⚡Easy Apply
            </button>
          </a>
          <button className="w-full p-2 rounded-md bg-blue-400">
            Unlock referal asks
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobCard;
