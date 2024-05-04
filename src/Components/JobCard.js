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
      <div className="border-2 border-black rounded-lg border-solid p-6 text-md w-full font-semibold">
        <div className="mb-3">
          <p className=" m-1 ">
            <span className="border-2 p-2 rounded-full text-sm">
              ⌛{props.DatePosted}
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex border-2 gap-4 p-2 my-2">
            <img alt="company" src="#" />
            <div>
              <p className="text-lg">{props.CompanyName}</p>
              <p className="text-sm">{props.JobTitle}</p>
              <p className="font-extrabold">{props.Location}</p>
            </div>
          </div>
          <p className="font-semibold">{`Estimated Salary ${props.ExpectedSalary} ✅`}</p>
          <p className="font-bold my-3">About Company :</p>
          <div>
            <p className="font-bold">About us </p>
            <div className="py-3">{props.Description}</div>
            <div>
              <p className="font-bold mt-3">Minimum Experience</p>
              <p>
                <p className="mb-3">{props.Experience}</p>
              </p>
            </div>
          </div>
        </div>
        <div className="border-2 flex flex-col gap-4">
          <button className="w-full p-2 bg-green-400">Easy Apply</button>
          <button className="w-full p-2 bg-blue-400">
            Unlock referal asks
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobCard;
