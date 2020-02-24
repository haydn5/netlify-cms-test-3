import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = (props) => {
  const data = props.data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>{data.title}</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allFile (filter: {sourceInstanceName: {eq: "content"} name: {eq: "home"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              intro
              image1
              image1alt
              image2
              image2alt
              image3
              image3alt
              image4
              image4alt
          }
        }
      }
    }
  }
}`
