import { createQueryObject } from '../helpers/helper';

import { ImSearch } from 'react-icons/im';

import styles from "../styles/SearchBox.module.css"

function SearchBox({ search, setSearch, setQuery }) {

    const searchHandler = () => {
        setQuery(query => createQueryObject(query, { search: search.toLowerCase().trim() }))
    }


    return (
        <div className={styles.search}>
            <input type="text" placeholder='Search...' value={search} onChange={e => setSearch(e.target.value)} />
            <button onClick={searchHandler} >
                <ImSearch />
            </button>
        </div>
    )
}

export default SearchBox