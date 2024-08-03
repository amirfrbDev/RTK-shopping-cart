import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'

import { fetchProducts } from '../features/productsSlice';

import Loader from '../components/Loader';

import { SiOpenproject } from 'react-icons/si';
import { IoMdPricetag } from 'react-icons/io';
import { FaArrowLeft } from 'react-icons/fa';

import styles from "../styles/DetailsPage.module.css"

function DetailsPage() {

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (isNaN(id) || id > 20 || id < 1) {
      navigate(id);
      return
    }
  }, [])

  const products = useSelector(state => state.products)

  const productDetails = products.products.find(p => p.id === +id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (!productDetails) return <Loader />

  return (
    <>
      {
        products.loading ? <Loader /> :
          (
            <div className={styles.container}>
              <img src={productDetails.image} alt={productDetails.title} />
              <div className={styles.information}>
                <h3 className={styles.title}>{productDetails.title}</h3>
                <p className={styles.description}>{productDetails.description}</p>
                <p className={styles.category}>
                  <SiOpenproject />
                  {productDetails.category}
                </p>
                <div>
                  <span className={styles.price}>
                    <IoMdPricetag />
                    ${productDetails.price}
                  </span>
                  <Link to="/products">
                    <FaArrowLeft />
                    <span>Back To Shop</span>
                  </Link>
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}

export default DetailsPage