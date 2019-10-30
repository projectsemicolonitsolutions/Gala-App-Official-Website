import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FeatureBlogs from "../components/featureBlogs"

const BlogPage = ({ data }) => {
  const featuredBlogs = data.featured.nodes
  return (
    <>
      <Layout>
        <Seo pageTitle="Blog" />
        <FeatureBlogs blogs={featuredBlogs} />
      </Layout>
    </>
  )
}

export const blogsQuery = graphql`
  query {
    featured: allBlogsJson(filter: { featured: { eq: true } }) {
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
export default BlogPage
