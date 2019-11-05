import React from "react"
import StyledBlogCard from "./shared-components/styledBlogCard"

const AllBlogs = ({ blogs }) => {
  return (
    <section>
      {blogs.map(blog => (
        <StyledBlogCard blog={blog} key={blog.id} />
      ))}
    </section>
  )
}

export default AllBlogs
