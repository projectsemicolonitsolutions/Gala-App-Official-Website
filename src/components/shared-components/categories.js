import React from "react"
import Category from "./category"

const Categories = ({ blogs }) => {
  let categoryList = []

  blogs.map(blog =>
    blog.category.forEach(cat =>
      categoryList.includes(cat) ? null : categoryList.push(cat)
    )
  )
  console.log(categoryList)
  return (
    <section className="d-flex flex-lg-column flex-row flex-wrap justify-content-center">
      <Category title="all" items={blogs} />
      {categoryList.map(category => (
        <Category title={category} items={blogs} />
      ))}
    </section>
  )
}

export default Categories
