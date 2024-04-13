import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useState } from "react"
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp"
import { FaAngleDown } from "@react-icons/all-files/fa/FaAngleDown"
import "./call-list.css"

const CallListPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const [activeCall, setActiveCall] = useState(null)

  const calls = [
    {
      name: "スタンダード",
      content:
        "タイガー ファイヤー サイバー ファイバー\nダイバー バイバー ジャージャー (ファイボー) (ワイパー)",
      videoUrl:
        "https://www.tiktok.com/@zennipponchekitarinai/video/7146996289014615298",
    },
    {
      name: "ジャパニーズ",
      content: "虎(とら) 火(ひ) 人造(じんぞう) 繊維(せんい)\n海女(あま) 振動(しんどう) 化繊(かせん) 飛(とび) 除去(じょきょ)",
      videoUrl: "https://www.tiktok.com/@zennipponchekitarinai/video/7231919421583789313",
    },
    // TODO: Add other calls as well
  ]

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
