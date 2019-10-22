import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImgFeature = () => {
  const data = useStaticQuery(graphql`
    query {
      phoneImage: file(relativePath: { eq: "phone.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.phoneImage.childImageSharp.fluid} />
}

export default ImgFeature
