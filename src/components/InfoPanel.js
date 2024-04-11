import React from "react"
import "./InfoPanel.css"
import { MdInfo } from "@react-icons/all-files/md/MdInfo"
import { MdWarning } from "@react-icons/all-files/md/MdWarning"
import { MdError } from "@react-icons/all-files/md/MdError"

export const getInfoPanelIcon = (type, marginRight = "10px") => {
  switch (type) {
    case "info":
      return <MdInfo style={{ marginRight }} />
    case "warning":
      return <MdWarning style={{ marginRight }} />
    case "error":
      return <MdError style={{ marginRight }} />
    default:
      return <></>
  }
}

const InfoPanel = ({ children, type = "info" }) => {
  return (
    <div className={`info-panel ${type}`}>
      {getInfoPanelIcon(type)}
      <span dangerouslySetInnerHTML={{ __html: children }}></span>
    </div>
  )
}

export default InfoPanel
