import React from "react"
import "./styledBlogCard.scss"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Comment from "../../assets/svg/comment-regular.svg"
import Facebook from "../../assets/svg/facebook-f.svg"
import Twitter from "../../assets/svg/twitter.svg"
import Pinterest from "../../assets/svg/pinterest.svg"

const StyledBlogCard = ({ blog }) => {
  const { category, title, description, date, comment, img, slug } = blog

  const imgQuery = useStaticQuery(graphql`
    query {
      blogImage2: file(relativePath: { eq: "img1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 400) {
            src
          }
        }
      }
    }
  `)

  const imgQueryResult = imgQuery.blogImage2.childImageSharp
  const toKababCase = stringCase =>
    stringCase
      .replace(/\s/g, "-")
      .replace(/,/g, "")
      .replace(/!/g, "")
      .toLowerCase()

  return (
    <div className="styled-blog-card ml-3 m-2 mb-5 d-flex flex-column">
      <section className="thumbnail py-4 my-1 d-sm-inline d-none">
        <Link
          to={`/blog/${slug || toKababCase(title)}`}
          className="text-decoration-none text-reset"
        >
          <div className="img-container h-100 w-100 overflow-hidden">
            <Img fluid={imgQueryResult.fluid || img} alt="Girl lemon" />
          </div>
        </Link>
      </section>
      <section className="blog-content d-flex flex-column">
        <Link
          to={`/blog/${slug || toKababCase(title)}`}
          className="text-decoration-none text-reset"
        >
          <div
            className="sm-thumbnail"
            style={{ backgroundImage: `url(${imgQueryResult.fixed.src})` }}
          >
            <main className="font-family-oden-r pt-4 pb-2 px-3 blog-border">
              <p className="blog-category blog-color-category text-uppercase mb-2 font-family-oden-r-b">
                {category}
              </p>
              <h3 className="blog-title text-uppercase">{title}</h3>
              <p className="blog-date text-secondary font-size-70">{date}</p>
            </main>
          </div>
          <article className="mt-3 font-family-oden-r-l text-secondary">
            <p className="overflow-hidden font-size-90 m-0">{description}</p>
            ...
          </article>
        </Link>
        <article className="h-100 d-flex align-items-end justify-content-between font-family-oden-l border-bottom border-w2 pb-2">
          <div className="font-size-70 d-flex align-items-center">
            <Comment width="13" height="13" className="mr-1" /> {comment.length}
          </div>
          <div className="text-secondary font-size-80">
            Share
            <a href="/">
              <Twitter width="13" height="13" className="ml-4" />
            </a>
            <a href="/">
              <Pinterest width="13" height="13" className="ml-4" />
            </a>
            <a href="/">
              <Facebook width="13" height="13" className="ml-4" />
            </a>
          </div>
        </article>
      </section>
    </div>
  )
}

export default StyledBlogCard
