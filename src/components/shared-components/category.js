import React from "react"

const Category = ({ title, items }) => {
  let itemCount = 0

  title === "all"
    ? (itemCount += items.length)
    : items.forEach(item =>
        item.category.includes(title) ? (itemCount += 1) : null
      )
  return (
    <section className="font-family-oden-r border-bottom py-3 px-lg-0 px-3">
      <div className="d-flex flex-start ">
        <p className="text-capitalize mr-1 font-size-90 m-0">{title}</p>
        <p className="font-size-70 blog-color-category m-0">{itemCount}</p>
      </div>
    </section>
  )
}

export default Category
