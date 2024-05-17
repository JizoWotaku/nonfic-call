import * as React from "react"
import { Link, graphql } from "gatsby"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { SiApplemusic } from "@react-icons/all-files/si/SiApplemusic"
import { getInfoPanelIcon } from "../components/InfoPanel"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  let musicNumber = 0

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Bio />
        <p>楽曲がないだとっっ！</p>
      </Layout>
    )
  }

  const showPosts = post => {
    const title = post.frontmatter.title || post.fields.slug
    const noteType = post.frontmatter.note?.type
    musicNumber++
    return (
      <li key={post.fields.slug}>
        <Link to={post.fields.slug} itemProp="url">
          <span>{musicNumber}. </span>
          <span itemProp="headline">{title}</span>
          <span>
            {post.frontmatter.appleMusicLink && (
              <SiApplemusic style={{ marginLeft: "3px" }} />
            )}
            {post.frontmatter.youtubeLink && (
              <FaYoutube style={{ marginLeft: "3px" }} />
            )}
            {noteType && (
              <span style={{ marginLeft: "3px" }}>
                {getInfoPanelIcon(noteType)}
              </span>
            )}
          </span>
        </Link>
      </li>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <h2>楽曲一覧</h2>
      <h3>コール有り</h3>
      <ul className="music-list">
        {posts
          .filter(post => post.frontmatter.isMix && post.frontmatter.isActive)
          .map(post => showPosts(post))}
        <h3>コール募集中</h3>
        {posts
          .filter(post => !post.frontmatter.isMix && post.frontmatter.isActive)
          .map(post => showPosts(post))}
        <h3>もうやらないかも</h3>
        {posts
          .filter(post => !post.frontmatter.isActive)
          .map(post => showPosts(post))}
      </ul>
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

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
