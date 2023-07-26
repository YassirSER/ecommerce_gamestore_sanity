"use client";

import React, { useRef, useState, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { connectSearchBox } from "react-instantsearch-dom";
import { useStateContext } from "../app/context/stateContext";

const SearchBar = ({ refine, inputClassname }) => {
  const { showSearchHits, setShowSearchHits, showSearchbarState } =
    useStateContext();
  const searchHitsRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  const handleClickOutside = (e) => {
    if (showSearchbarState) {
      inputRef?.current.focus();
    }
    if (!searchHitsRef.current.contains(e.target)) {
      setShowSearchHits(false);
    } else {
      setShowSearchHits(true);
    }
  };

  const handleClick = () => {
    inputRef.current.value = "";
    // setShowSearchHits(false);
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
      <IoSearchOutline className="search-icon" fill="black" stroke="black" />
      <input
        type="text"
        className={inputClassname}
        ref={inputRef}
        // value={searchParam}
        placeholder="Search"
        onClick={() => {
          setShowSearchHits(true);
        }}
        onChange={(e) => {
          refine(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default connectSearchBox(SearchBar);
