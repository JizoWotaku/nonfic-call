import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp"
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown"
import calls from "../data/callsData"
import "./call-list.css"

const CallListPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [activeCall, setActiveCall] = useState(null)

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

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="コール一覧" />
      <h1>コール一覧</h1>

      <div className="call-list">
        {calls.map((call, index) => (
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
              <div>
                <p className="call-content">
                  {renderContentWithLineBreaks(call.content)}
                </p>
                {call.videoUrl && (
                  <a
                    href={call.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-video"
                  >
                    参考動画を見る
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
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
