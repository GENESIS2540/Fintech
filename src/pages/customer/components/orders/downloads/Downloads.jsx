import React from "react";
import Header from "../../common/Header";
import { Divider } from "antd";
import Files from "./Files";
import Links from "./Links";

const Downloads = () => {
  const [selectedOption, setSelectedOption] = React.useState("files");

  const handleSelectedOption = (setting) => {
    setSelectedOption(setting);
  };
  return (
    <div>
      <Header title={"Downloads"} category={"My Downloads"} />
      <div className="shadow-custom">
        <div className="flex gap-[40px] font-semibold px-[20px] pt-[20px]">
          <button className={`transition-all ease-in-out duration-300 ${selectedOption === "files" ? "border-b-2 border-[#015FF1] text-[#015FF1]" : " "}`} onClick={() => handleSelectedOption("files")}>
            Downloadable Files
          </button>
          <button className={`transition-all ease-in-out duration-300 ${selectedOption === "links" ? "border-b-2 border-[#015FF1] text-[#015FF1]" : " "}`} onClick={() => handleSelectedOption("links")}>
            Downloadable Links
          </button>
        </div>
        <Divider />
        <div className="p-[20px]">
          {selectedOption === "files" && <Files />}
          {selectedOption === "links" && <Links />}
        </div>
      </div>
    </div>
  );
};

export default Downloads;
