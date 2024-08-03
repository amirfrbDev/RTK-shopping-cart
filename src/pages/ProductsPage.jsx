import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import Card from '../components/Card';
import Loader from '../components/Loader';
import SearchBox from '../components/SearchBox';

import styles from "../styles/ProductsPage.module.css";

import { filterProducts, getInitialQuery, searchProducts } from '../helpers/helper';
import Sidebar from '../components/Sidebar';
import { fetchProducts } from '../features/productsSlice';

function ProductsPage() {

  const data = useSelector(store => store).products;

  const products = data.products

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  console.log(data);


  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    setDisplayed(products);
    const query = getInitialQuery(searchParams)
    setQuery(query)

  }, [products])

  useEffect(() => {
    setSearchParams(query)
    setSearch(query.search || "");

    let finalProducts = searchProducts(products, query.search?.toLowerCase()?.trim());

    finalProducts = filterProducts(finalProducts, query.category)

    setDisplayed(finalProducts)

  }, [query])

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {data.loading && <Loader />}
          {
            displayed.map(product => <Card key={product.id} product={product} />)
          }
        </div>
        <Sidebar setQuery={setQuery} query={query} />
      </div>
    </>
  )
}

export default ProductsPage