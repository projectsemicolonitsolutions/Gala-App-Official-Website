import React from "react"
import BlogAsideSM from "./shared-components/blogAsideSM"

const RecentBlogs = ({ blogs }) => {
  const recentblog = blogs.slice(4, 8)
  return (
    <ul className="list-unstyled">
      {recentblog.map(blog => (
        <li key={blog.id}>
          <BlogAsideSM blog={blog} />
        </li>
      ))}
    </ul>
  )
}

export default RecentBlogs
