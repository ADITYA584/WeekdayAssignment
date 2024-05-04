import React from "react";
import JobsData from "./Components/DummyData";
import JobCard from "./Components/JobCard";

// {
//     JobTitle: "Software Engineer",
//     CompanyName: "ABC Inc.",
//     Location: "New York, NY",
//     JobDescription: "Developing web applications using React and Node.js",
//     ExperienceRequired: "2-4 years",
//     DatePosted: "5 days ago",
//     ExpectedSalary: "20-30 LPA",
//     AboutDescription:
//       "Join our team at ABC Inc. as a Software Engineer to work on exciting projects developing web applications using React and Node.js. Collaborate with a talented team of developers to build innovative solutions for clients. Opportunities for growth and advancement in a dynamic environment.",
//   }

const JobSection = () => {
  return (
    <div className="grid grid-cols-3 p-4 m-auto gap-10 w-full h-full">
      {JobsData.map((item) => {
        return (
          <JobCard
            JobTitle={item.JobTitle}
            CompanyName={item.CompanyName}
            Location={item.Location}
            Description={item.JobDescription}
            Experience={item.ExperienceRequired}
            DatePosted={item.DatePosted}
            ExpectedSalary={item.ExpectedSalary}
          />
        );
      })}
    </div>
  );
};

export default JobSection;
