import React from "react"

const HeaderAside = ({ title }) => {
  return (
    <header className="text-uppercase text-center font-family-oden-r">
      <h5 className="font-size-100">{title}</h5>
      <hr width="50px" className="blog-border my-2 mx-auto" />
    </header>
  )
}

export default HeaderAside
