import React from "react";

const SearchBar = (props) => {
  return (
    <div className=" sm:m-4 p-4  ">
      <form className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
        {/* --role search bar-- */}
        <div className="border-2 rounded-lg  ">
          <input
            className=" w-full py-2 pl-1 md:p-2 focus:outline-blue-500 h-full "
            placeholder="Role"
            type="text"
            onChange={(e) => {
              props.roleChangeHandler(e);
            }}
          ></input>
        </div>

        {/* ---Minimum salary field */}
        <div className="border-2 rounded-lg ">
          <input
            className="w-full py-2 pl-1 md:p-2 focus:outline-blue-500 h-full "
            placeholder="Minimum Experience"
            type="text"
            onChange={(e) => {
              props.minExpChangeHandler(e);
            }}
          ></input>
        </div>
        {/* ---company field----- */}
        <div className=" border-2 rounded-lg">
          <input
            className="w-full py-2 pl-1 md:p-2 focus:outline-blue-500 "
            placeholder="Company"
            type="text"
            onChange={(e) => {
              props.companyChangeHandler(e);
            }}
          ></input>
        </div>
        {/* -------LOcation field ------- */}
        <div className=" border-2 rounded-lg">
          <input
            className="w-full py-2 pl-1 md:p-2 focus:outline-blue-500 "
            placeholder="Location"
            type="text"
            onChange={(e) => {
              props.locationChangeHandler(e);
            }}
            // value={props.location}
          ></input>
        </div>
        {/* ----Minimum Salary field */}
        <div className=" border-2 rounded-lg ">
          <input
            className="w-full py-2 pl-1 md:p-2 focus:outline-blue-500 "
            placeholder="Minimum Salary"
            type="text"
            onChange={(e) => {
              props.minSalChangeHandler(e);
            }}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
