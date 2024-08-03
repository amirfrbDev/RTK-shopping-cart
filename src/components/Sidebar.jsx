import { FaListUl } from 'react-icons/fa';
import { createQueryObject } from '../helpers/helper';

import styles from "../styles/Sidebar.module.css"

const categories = [
    { id: 1, type: "All" },
    { id: 2, type: "Electronics" },
    { id: 3, type: "Jewelery" },
    { id: 4, type: "Men's Clothing" },
    { id: 5, type: "Women's Clothing" },
]


function Sidebar({ setQuery, query: { category } }) {

    const categoryHandler = (event) => {
        const { tagName } = event.target;

        const category = event.target.innerText.toLowerCase()

        if (tagName !== "LI") return;
        setQuery(query => createQueryObject(query, { category }))
    }

    return (
        <div className={styles.sidebar}>
            <div>
                <FaListUl />
                <p>Categories</p>
            </div>
            <ul onClick={categoryHandler}>
                {/* <li className={!category && styles.selected}>All</li>
                <li className={category === "electronics" ? styles.selected : null}>Electronics</li>
                <li className={category === "jewelery" ? styles.selected : null}>Jewelery</li>
                <li className={category === "men's clothing" ? styles.selected : null}>Men's Clothing</li>
                <li className={category === "women's clothing" ? styles.selected : null}>Women's Clothing</li> */}

                {
                    categories.map(cat => <li key={cat.id} className={cat.type.toLowerCase() === category ? styles.selected : null}>{cat.type}</li>)
                }

            </ul>
        </div>

    )
}

export default Sidebar