import React from "react";

const WorkCard = ({ img, name, description, onClick }) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        onClick={onClick}
      >
        <img
          src={img}
          alt={name}
          className="h-full w-full object-cover hover:scale-105 transition-all ease-out duration-300 cursor-pointer"
        />
      </div>
      <h1
        onClick={onClick}
        className="mt-5 text-3xl font-medium cursor-pointer"
      >
        {name ? name : "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
    </div>
  );
};

export default WorkCard;
