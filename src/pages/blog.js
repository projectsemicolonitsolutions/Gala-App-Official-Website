import React from "react"
import { graphql } from "gatsby"
import { Row, Col, Container } from "reactstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FeatureBlogs from "../components/featureBlogs"
import AllBlogs from "../components/allBlogs"

const BlogPage = ({ data }) => {
  const featuredBlogs = data.featured.nodes
  const allBlogs = data.all.nodes
  return (
    <>
      <Layout>
        <Seo pageTitle="Blog" />
        <FeatureBlogs blogs={featuredBlogs} />
        <Container>
          <Row className="py-5">
            <Col lg="8" xs="12">
              <AllBlogs blogs={allBlogs} />
            </Col>
          </Row>
        </Container>
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
    all: allBlogsJson {
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
