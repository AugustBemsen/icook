import React from "react";
import "../../App.css";
import "./Search.css";
import Title from "../../Components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const Search = (props) => {
  return (
    <div>
      <Title title="What to eat?" showIcon={true} />
      <div className="Search">
        <form>
          <input
            type="text"
            name="search"
            id="search"
            placeholder={<FontAwesomeIcon className="navLinks" icon={faFilter} />}
          />
          <button type="submit">Cook</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
