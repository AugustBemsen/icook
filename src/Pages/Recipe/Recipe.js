import React from "react";
import "../../App.css";
import "./Recipe.css";
import Title from "../../Components/Title/Title";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
const Recipe = () => {
  return (
    <div className="Recipe Flex">
      <Title
        title="What to eat?"
        color="var(--third-color)"
        showTitle={false}
        showIcon={true}
        icon={faHeart}
      />
    </div>
  );
};

export default Recipe;
