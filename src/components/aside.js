import React from "react"

const Aside = ({ children, className }) => {
  return (
    <aside className={`w-100 mb-5 px-lg-4 ${className || ``}`}>
      {children}
    </aside>
  )
}

export default Aside
