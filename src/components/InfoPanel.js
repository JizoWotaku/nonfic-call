import React from "react"
import "./InfoPanel.css"
import { MdInfo } from "@react-icons/all-files/md/MdInfo"
import { MdWarning } from "@react-icons/all-files/md/MdWarning"
import { MdError } from "@react-icons/all-files/md/MdError"

const InfoPanel = ({ children, type = "info" }) => {
  const Icon = () => {
    switch (type) {
      case "info":
        return <MdInfo style={{ marginRight: "10px" }} />
      case "warning":
        return <MdWarning style={{ marginRight: "10px" }} />
      case "error":
        return <MdError style={{ marginRight: "10px" }} />
    }
  }
  return (
    <div className={`info-panel ${type}`}>
      <Icon />
      <span dangerouslySetInnerHTML={{ __html: children }}></span>
    </div>
  )
}

export default InfoPanel
