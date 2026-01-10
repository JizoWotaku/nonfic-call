import * as React from "react"
import { Link, graphql } from "gatsby"
import { useState } from "react"
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube"
import { SiApplemusic } from "@react-icons/all-files/si/SiApplemusic"
import { getInfoPanelIcon } from "../components/InfoPanel"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const [searchQuery, setSearchQuery] = useState("")

  // フィルタリングロジックの更新
  const filteredPosts = posts.filter(post => {
    const title = post.frontmatter.title || ""
    // キーワード配列を取得（未定義の場合は空配列）
    const keywords = post.frontmatter.keywords || []
    const query = searchQuery.toLowerCase()

    // タイトル または キーワードのいずれかがヒットすればOK
    const isTitleMatch = title.toLowerCase().includes(query)
    const isKeywordMatch = keywords.some(keyword => 
      keyword.toLowerCase().includes(query)
    )

    return isTitleMatch || isKeywordMatch
  })

  const showPosts = (post) => {
    const title = post.frontmatter.title || post.fields.slug
    const noteType = post.frontmatter.note?.type
    
    return (
      <li key={post.fields.slug}>
        <Link to={post.fields.slug} itemProp="url">
          <span itemProp="headline">{title}</span>
          <span className="music-icons">
            {post.frontmatter.appleMusicLink && (
              <SiApplemusic style={{ color: "#fa243c" }} />
            )}
            {post.frontmatter.youtubeLink && (
              <FaYoutube style={{ color: "#FF0000" }} />
            )}
            {noteType && (
              <span>
                {getInfoPanelIcon(noteType)}
              </span>
            )}
          </span>
        </Link>
      </li>
    )
  }

  // カテゴリごとにフィルタリング
  const mixPosts = filteredPosts.filter(post => post.frontmatter.isMix && post.frontmatter.isActive)
  const nonMixPosts = filteredPosts.filter(post => !post.frontmatter.isMix && post.frontmatter.isActive)
  const inactivePosts = filteredPosts.filter(post => !post.frontmatter.isActive)

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      
      {/* 検索ボックス */}
      <div style={{ marginBottom: '30px' }}>
        <input
          type="text"
          placeholder="楽曲名、ひらがな、カタカナで検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '12px', 
            borderRadius: '8px', 
            border: '2px solid #e0e0e0',
            fontSize: '16px'
          }}
        />
      </div>

      <h2>楽曲一覧</h2>

      {mixPosts.length > 0 && (
        <>
          <h3>コール有り</h3>
          <ul className="music-list">
            {mixPosts.map((post) => showPosts(post))}
          </ul>
        </>
      )}

      {nonMixPosts.length > 0 && (
        <>
          <h3>コール募集中</h3>
          <ul className="music-list">
            {nonMixPosts.map((post) => showPosts(post))}
          </ul>
        </>
      )}

      {inactivePosts.length > 0 && (
        <>
          <h3>アーカイブ / その他</h3>
          <ul className="music-list">
            {inactivePosts.map((post) => showPosts(post))}
          </ul>
        </>
      )}

      {filteredPosts.length === 0 && (
        <p style={{ textAlign: 'center', color: '#666' }}>
          該当する楽曲が見つかりませんでした。
        </p>
      )}
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          keywords  # GraphQLクエリにkeywordsを追加
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