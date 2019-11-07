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
  return (
    <>
      <Seo pageTitle="Home" />
      <Hero />
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
  }
`
export default IndexPage
