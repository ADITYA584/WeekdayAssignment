const SearchBar = () => {
  return (
    <div className=" m-4 p-4 ">
      <form className="flex m-auto gap-8 justify-center">
        <div className=" border-2 ">
          {" "}
          <input className="p-2 " placeholder="Company" type="text"></input>
        </div>
        <div className=" border-2 ">
          <input
            className="p-2 "
            placeholder="Minimum Experience"
            type="text"
          ></input>
        </div>
        <div className=" border-2 ">
          <input className="p-2 " placeholder="Role" type="text"></input>
        </div>
        <div className=" border-2 ">
          <input className="p-2 " placeholder="Location" type="text"></input>
        </div>
        <div className=" border-2 ">
          <input className="p-2 " placeholder="Job Type" type="text"></input>
        </div>
        <div className=" border-2  ">
          <input
            className="p-2 "
            placeholder="Minimum Salary"
            type="text"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
