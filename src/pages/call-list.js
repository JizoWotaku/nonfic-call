import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp"
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown"
import { FaCopy } from "@react-icons/all-files/fa/FaCopy"
import calls from "../data/callsData"
import "./call-list.css"

const CallListPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [activeCall, setActiveCall] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleCall = index => {
    setActiveCall(activeCall === index ? null : index)
  }

  const renderContentWithLineBreaks = content => {
    return content.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))
  }

  const copyToClipboard = (e, text) => {
    e.stopPropagation() // アコーディオンの開閉を防ぐ
    navigator.clipboard.writeText(text).then(() => {
      alert("コールをコピーしました！")
    }).catch(err => {
      console.error('Copy failed', err)
    })
  }

  // フィルタリングロジック
  const filteredCalls = calls.filter(call => {
    const q = searchQuery.toLowerCase()
    return (
      call.name.toLowerCase().includes(q) || 
      call.content.toLowerCase().includes(q)
    )
  })

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="コール一覧" />
      <h1>コール一覧</h1>

      {/* 検索ボックス */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="コール名や内容で検索..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ 
            width: '100%', 
            padding: '10px', 
            borderRadius: '5px', 
            border: '1px solid #ccc' 
          }}
        />
      </div>

      <div className="call-list">
        {filteredCalls.map((call, index) => (
          <div
            key={index}
            className="call-card"
            onClick={() => toggleCall(index)}
            onKeyDown={() => toggleCall(index)}
            role="button"
            tabIndex="0"
            aria-expanded={activeCall === index}
          >
            <div className="call-header">
              <span>{call.name}</span>
              {activeCall === index ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            
            {activeCall === index && (
              <div style={{ position: 'relative' }}>
                <p className="call-content" style={{ paddingRight: '30px' }}>
                  {renderContentWithLineBreaks(call.content)}
                </p>
                
                {/* コピーボタン */}
                <button 
                  onClick={(e) => copyToClipboard(e, call.content)}
                  title="コピーする"
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    right: 0, 
                    border: 'none', 
                    background: 'transparent', 
                    cursor: 'pointer', 
                    color: '#005b99',
                    padding: '5px'
                  }}
                >
                  <FaCopy size={20} />
                </button>

                {call.videoUrl && (
                  <a
                    href={call.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-video"
                    onClick={(e) => e.stopPropagation()}
                  >
                    参考動画を見る
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
        {filteredCalls.length === 0 && (
            <p>見つかりませんでした。</p>
        )}
      </div>
    </Layout>
  )
}

export default CallListPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`