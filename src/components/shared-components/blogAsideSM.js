import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const BlogAsideSM = ({ blog }) => {
  const { title, date, img } = blog
  const imgQuery = useStaticQuery(graphql`
    query {
      blogImage3: file(relativePath: { eq: "img3.jpg" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <section className="d-flex flex-start py-2">
      <section className="mr-2">
        <Img fixed={imgQuery.blogImage3.childImageSharp.fixed || img} />
      </section>
      <section className="font-family-oden-r">
        <p className="m-0 text-muted font-size-70">{date}</p>
        <p className="m-0 text-uppercase font-size-80">{title}</p>
      </section>
    </section>
  )
}

export default BlogAsideSM
