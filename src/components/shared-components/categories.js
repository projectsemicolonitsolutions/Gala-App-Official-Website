import React from "react"
import Category from "./category"

const Categories = ({ blogs }) => {
  let categoryList = ["all"]

  blogs.map(blog =>
    blog.category.forEach(cat =>
      categoryList.includes(cat) ? null : categoryList.push(cat)
    )
  )
  return (
    <section className="d-flex flex-lg-column flex-row flex-wrap justify-content-center">
      {categoryList.map((category, index) => (
        <Category title={category} items={blogs} key={blogs[index].id} />
      ))}
    </section>
  )
}

export default Categories
