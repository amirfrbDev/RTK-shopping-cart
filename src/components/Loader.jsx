import { RotatingLines  } from "react-loader-spinner"

import styles from "../styles/Loader.module.css"
import { memo } from "react"
import { TbBackslash } from "react-icons/tb"

function Loader() {
  return (
    <div className={styles.loader}>
        <RotatingLines width="100px" height="100px" strokeWidth="3" strokeColor="#fe5d42" />
    </div>
  )
}

export default memo(Loader)
