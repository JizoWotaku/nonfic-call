import React from "react"
import "./InfoPanel.css"
import { MdInfo } from "@react-icons/all-files/md/MdInfo"
import { MdWarning } from "@react-icons/all-files/md/MdWarning"
import { MdError } from "@react-icons/all-files/md/MdError"

export const getInfoPanelIcon = type => {
  switch (type) {
    case "info":
      return <MdInfo />
    case "warning":
      return <MdWarning />
    case "error":
      return <MdError />
    default:
      return <></>
  }
}

const InfoPanel = ({ children, type = "info" }) => {
  return (
    <div className={`info-panel ${type}`}>
      <div className="icon-container">{getInfoPanelIcon(type)}</div>
      <span dangerouslySetInnerHTML={{ __html: children }}></span>
    </div>
  )
}

export default InfoPanel
