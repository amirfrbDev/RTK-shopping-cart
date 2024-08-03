import { memo } from "react"

import { RotatingLines } from "react-loader-spinner"
import { TbBackslash } from "react-icons/tb"

import styles from "../styles/Loader.module.css"

function Loader() {
  return (
    <div className={styles.loader}>
      <RotatingLines width="100px" height="100px" strokeWidth="3" strokeColor="#fe5d42" />
    </div>
  )
}

export default memo(Loader)
