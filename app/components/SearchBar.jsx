"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  const [searchParam, setSearchParam] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?name=${encodeURIComponent(searchParam)}`);
    setSearchParam("");
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleSubmit} className="form-container">
        <IoSearchOutline className="search-icon" />
        <input
          type="text"
          className="searchbar"
          value={searchParam}
          placeholder="grand theft auto v"
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
