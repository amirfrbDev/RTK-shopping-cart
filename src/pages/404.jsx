import error404 from "../assets/error404.png"

import styles from "../styles/404.module.css"

function NotFoundPage() {
  return (
    <div className={styles.container}>
      <p>Page Was Not Found!</p>
      <img src={error404} alt="Page Not Found!" />
    </div>
  )
}

export default NotFoundPage