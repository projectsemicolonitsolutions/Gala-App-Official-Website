import React from "react"
import RightArrow from "../../assets/svg/arrow-right.svg"

const Blog = ({ thumbnail, title, content, slug, className }) => {
  return (
    <article className={className || ``}>
      <section
        className="thumbnail rounded mb-4"
        style={{
          width: "100%",
          height: "250px",
          backgroundImage: thumbnail,
          backgroundColor: "gray",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></section>
      <h6 className="font-family-quicksand-b blog-color">{title}</h6>
      <p className="font-family-quicksand-book font-size-80 text-muted">
        {content}
      </p>
      <a href={slug || `#`} className="text-decoration-none">
        <section className="d-flex align-items-center fill-primary">
          <p className="blog-color font-family-quicksand-book font-size-80 m-0 mr-1">
            Continue Reading
          </p>
          <RightArrow width="12" className="color-primary" />
        </section>
      </a>
    </article>
  )
}

export default Blog
