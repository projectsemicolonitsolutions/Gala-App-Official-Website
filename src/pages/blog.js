import React from "react"
import { graphql } from "gatsby"
import { Row, Col, Container } from "reactstrap"
import Layout from "../components/layout"
import Seo from "../components/seo"
import FeatureBlogs from "../components/featureBlogs"
import AllBlogs from "../components/allBlogs"

import Aside from "../components/aside"
import BlogSearch from "../components/shared-components/blogSearch"
import HeaderAside from "../components/shared-components/headerAside"
import Categories from "../components/shared-components/categories"
import RecentBlogs from "../components/recentBlogs"

const BlogPage = ({ data }) => {
  const featuredBlogs = data.featured.nodes
  const allBlogs = data.all.nodes
  return (
    <>
      <Layout>
        <Seo pageTitle="Blog" />
        <FeatureBlogs blogs={featuredBlogs} />
        <Container>
          <Row className="py-5 flex-lg-row flex-column-reverse">
            <Col lg="8" xs="12">
              <AllBlogs blogs={allBlogs} />
            </Col>
            <Col lg="4" xs="12">
              <Aside>
                <Row className="flex-lg-column flex-md-row-reverse flex-column-reverse">
                  <Col
                    lg="12"
                    md={{ size: 4, offset: 0 }}
                    xs={{ size: 7, offset: 5 }}
                    className="d-flex justify-content-end"
                  >
                    <BlogSearch />
                  </Col>
                  <Col lg="12" md="8" xs="12">
                    <HeaderAside title="category" />
                    <Categories blogs={allBlogs} />
                  </Col>
                </Row>
              </Aside>
              <Aside className="d-lg-flex d-none">
                <Row>
                  <Col xs="12">
                    <HeaderAside title="recent post" />
                    <RecentBlogs blogs={allBlogs} />
                  </Col>
                </Row>
              </Aside>
            </Col>
          </Row>
          <Row className="d-lg-none">
            <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
              <HeaderAside title="recent post" />
              <RecentBlogs blogs={allBlogs} />
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
