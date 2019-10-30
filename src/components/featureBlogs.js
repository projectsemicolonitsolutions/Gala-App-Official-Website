import React from "react"
import { Row, Col } from "reactstrap"
import FeatureCard from "./shared-components/featureCard"

const FeatureBlogs = ({ blogs }) => {
  return (
    <section className="feature-blogs">
      <Row className="m-0 mt-5 mb-3 pt-5 px-3 flex-nowrap overflow-auto">
        {blogs.map(blog => (
          <Col md="4" sm="6" xs="12" key={blog.id}>
            <FeatureCard featBlog={blog} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default FeatureBlogs
