"use client";

import React, { useRef, useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { connectSearchBox } from "react-instantsearch-dom";
import { useStateContext } from "../context/stateContext";

const SearchBar = ({ refine, inputClassname }) => {
  const { showSearchHits, setShowSearchHits } = useStateContext();
  const searchHitsRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (!searchHitsRef.current.contains(e.target)) {
      setShowSearchHits(false);
    } else {
      setShowSearchHits(true);
    }
  };

  return (
    <div
      className={
        showSearchHits
          ? "logoandinput-container shadow"
          : "logoandinput-container"
      }
      ref={searchHitsRef}
    >
      <IoSearchOutline className="search-icon" />
      <input
        type="text"
        className={inputClassname}
        // ref={inputRef}
        // value={searchParam}
        placeholder="Search"
        onClick={() => setShowSearchHits(true)}
        onChange={(e) => {
          refine(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default connectSearchBox(SearchBar);
