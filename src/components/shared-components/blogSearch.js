import React from "react"
import SearchSVG from "../../assets/svg/search.svg"

const BlogSearch = () => {
  return (
    <div
      className="blog-search w-100 d-flex flex-nowrap my-lg-5 my-3"
      style={{ maxWidth: "400px", backgroundColor: "#f4f7f6" }}
    >
      <input
        type="text"
        name="Search"
        id="search"
        placeholder="Search..."
        className="p-2 px-3 bg-transparent w-100 font-size-90 font-family-oden-r"
        style={{ border: "1px solid #f4f4f4" }}
      />
      <button className="py-2 px-3  bg-blog border-0">
        <SearchSVG fill="#fff" width="15px" height="15px" />
      </button>
    </div>
  )
}

export default BlogSearch
