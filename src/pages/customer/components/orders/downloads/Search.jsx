import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = () => {
  return (
    <div>
      <div className="flex gap-[20px] px-[20px] pb-[20px]">
        <div className="items-center w-[100%] flex relative">
          <FontAwesomeIcon className="absolute pl-[10px]" icon={faSearch} />
          <input
            className="bg-[#f1f2f3] w-[100%] rounded px-[40px] py-[5px] outline-none focus:border-[#015FF1] border-2"
            type="search"
            name="search"
            placeholder="Search by invoice number"
          />
        </div>
        <button className="border-2 w-max font-semibold px-[20px] py-[5px] bg-[#015FF1] rounded-lg text-white">
          Search
        </button>
        <button className="border-2 w-max font-semibold px-[20px] py-[5px] bg-white rounded-lg">
          Clear
        </button>
      </div>
    </div>
  );
};

export default Search;
