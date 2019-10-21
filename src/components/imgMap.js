import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImgMap = () => {
  const data = useStaticQuery(graphql`
    query {
      mapImage: file(relativePath: { eq: "gala-map-1800w.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.mapImage.childImageSharp.fluid}
      className="position-static"
      imgStyle={{ objectFit: "contain" }}
    />
  )
}

export default ImgMap
