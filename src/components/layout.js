import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  layout,
} from "./layout.module.css"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav />
      <div className={layout}>
        <title>{data.site.siteMetadata.title}</title>
        <main>{children}</main>
      </div>
      <Footer
          siteTitle={data.site.siteMetadata.title}
      />
    </>
  )
}

export default Layout