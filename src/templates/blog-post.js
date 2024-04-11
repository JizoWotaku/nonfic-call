import * as React from "react"
import { graphql } from "gatsby"
import {FaInfoCircle} from "@react-icons/all-files/fa/FaInfoCircle"

import Layout from "../components/layout"
import Seo from "../components/seo"
import InfoPanel from "../components/InfoPanel"

import "./blog.css"

const BlogPostTemplate = ({
  data: { site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const note = post.frontmatter.note

  const [timeSet, setTimeSet] = React.useState(false)

  const youtubeSrc = React.useMemo(() => {
    if (!post?.frontmatter?.youtubeLink) return undefined

    const baseSrc = `https://www.youtube.com/embed/${new URL(
      post.frontmatter.youtubeLink
    ).searchParams.get("v")}`

    if (timeSet) {
      return `${baseSrc}?start=${timeSet}&autoplay=1`
    }
    return baseSrc
  }, [post, timeSet])

  const clickHandler = e => {
    const el = e.target.closest("t")
    if (el && e.currentTarget.contains(el) && el?.getAttribute("s")) {
      setTimeSet(el.getAttribute("s"))
    }
  }

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
        </header>

        {note && <InfoPanel type="info">{note}</InfoPanel>}

        <div
          role="presentation"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
          onClick={clickHandler}
          onKeyDown={clickHandler}
        />

        <hr />
        {youtubeSrc && (
          <>
            <iframe
              class="youtube-video"
              src={youtubeSrc}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
            <hr />
          </>
        )}
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        youtubeLink
        note
      }
    }
  }
`
