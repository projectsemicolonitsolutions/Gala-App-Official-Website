import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ImgDevices = () => {
  const data = useStaticQuery(graphql`
    query {
      devicesImage: file(relativePath: { eq: "device.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.devicesImage.childImageSharp.fluid} />
}

export default ImgDevices
