import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  let musicNumber = 0

  return (
    <Layout location={location} title={siteTitle}>
      <p>
        何を求めてここに来たのかは知らないがコーヒーの一杯でも飲んでいく時間はあるんだろう？
      </p>
      <StaticImage
      src="../images/coffee_cup_on_desk.png"
      />
      <p>ここにコーヒーを置いておくからゆっくりしていくといい</p>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          isMix
          youtubeLink
          appleMusicLink
          note {
            type
            content
          }
          isActive
        }
      }
    }
  }
`
