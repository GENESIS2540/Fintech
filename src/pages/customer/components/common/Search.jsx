import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search = () => {
  return (
      <div className="items-center w-[100%] flex relative">
        <FontAwesomeIcon className="absolute pl-[10px]" icon={faSearch} />
        <input
          className="bg-white w-[100%] rounded px-[40px] py-[5px] outline-none focus:border-[#015FF1] border-2"
          type="search"
          name="search"
          placeholder="Search by invoice number"
        />
      </div>
  );
};

export default Search;
