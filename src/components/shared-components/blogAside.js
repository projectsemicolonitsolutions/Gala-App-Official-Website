import React from "react";
import { Row } from "reactstrap";

const BlogAside = ({ thumbnail, title, content, slug, className }) => {
  return (
    <aside className={`h-100px overflow-hidden ${className || ``}`}>
      <a href={slug || `#`} className="text-decoration-none">
        <Row className="flex-nowrap m-0">
          <section
            className="thumbnail rounded mr-2"
            style={{
              minWidth: "150px",
              width: "150px",
              minHeight: "100px",
              height: "100px",
              backgroundImage: thumbnail,
              backgroundColor: "darkgray",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></section>
          <section className="d-flex flex-column justify-content-between font-size-80">
            <p className="font-family-quicksand-b text-secondary text-regular">
              {title}
            </p>
            <p className="font-family-quicksand-book text-muted m-0">
              {content}
            </p>
          </section>
        </Row>
      </a>
    </aside>
  );
};

export default BlogAside;
