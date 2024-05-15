import React from "react";
import { useState } from "react";
// import PrescriptionDrugs from "../prescription/PrescriptionDrugs";
// import PersonalCare from "../personalCare/PersonalCare";
// import Dermatology from "../Dermatology/Dermatology";
// import Respiratory from "../Respiratory/Respiratory";

const TopProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("prescription");
  const [color, setColor] = useState("bg-orange-500");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setColor(color);
  };

  return (
    <div>
      <div>
        <div>
          <h3 className=" text-2xl font-bold">Top selling products</h3>
        </div>

        <div className="my-4 border-b">
          <button
            onClick={() => handleCategoryChange("prescription")}
            className={`mr-4 ${
              selectedCategory === "prescription" ? " text-orange-500" : ""
            }`}
          >
            prescription dugs
          </button>

          <button
            onClick={() => handleCategoryChange("personalcare")}
            className={`mr-4 ${
              selectedCategory === "personalcare" ? " text-orange-500" : ""
            }`}
          >
            personal care
          </button>

          <button
            onClick={() => handleCategoryChange("dermatology")}
            className={`mr-4 ${
              selectedCategory === "dermatology" ? " text-orange-500" : ""
            }`}
          >
            Dermatology drugs
          </button>

          <button
            onClick={() => handleCategoryChange("respiratory")}
            className={`mr-4 ${
              selectedCategory === "respiratory" ? " text-orange-500" : ""
            }`}
          >
            Respiratory dugs
          </button>
        </div>

        {/* {selectedCategory === "prescription" && <PrescriptionDrugs />}
        {selectedCategory === "personalcare" && <PersonalCare />}
        {selectedCategory === "dermatology" && <Dermatology />}
        {selectedCategory === "respiratory" && <Respiratory />} */}
      </div>
    </div>
  );
};

export default TopProducts;
