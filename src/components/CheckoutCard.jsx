import React from 'react'

import { useDispatch } from 'react-redux'

import { shortenText } from '../helpers/helper'
import { decrease, increase, removeItem } from '../features/cartSlice'

import { MdDeleteOutline } from 'react-icons/md'

import styles from "../styles/CheckoutCard.module.css"

function CheckoutCard({ product }) {

    const dispatch = useDispatch()

    const { image, title, quantity } = product

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <p>{shortenText(title)}</p>
            <div className={styles.actions}>
                {quantity === 1 && (
                    <button onClick={() => dispatch(removeItem(product))}>
                        <MdDeleteOutline />
                    </button>
                )}
                {quantity > 1 && (<button onClick={() => dispatch(decrease(product))}>-</button>)}
                <span>{quantity}</span>
                <button onClick={() => dispatch(increase(product))}>+</button>
        </div>
        </div >
    )
}

export default CheckoutCard