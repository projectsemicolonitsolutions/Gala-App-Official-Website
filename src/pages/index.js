import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../sass/main.scss"
import Hero from "../components/hero"
import Overview from "../components/overview"
import Tutorial from "../components/tutorial"
import Features from "../components/features"
import LatestBlog from "../components/latestBlog"
import About from "../components/about"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const latestBlog = data.latest.nodes
  const { description } = data.site.siteMetadata
  return (
    <>
      <Seo pageTitle="Home" />
      <Hero description={description} />
      <Overview />
      <Tutorial />
      <Features />
      <LatestBlog blogs={latestBlog} />
      <About />
    </>
  )
}

export const blogsQuery = graphql`
  query {
    latest: allBlogsJson {
      nodes {
        id
        category
        title
        description
        date
        comment
        img
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`
export default IndexPage
