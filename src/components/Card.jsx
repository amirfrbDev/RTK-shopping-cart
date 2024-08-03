import React from 'react'

import { Link } from 'react-router-dom'
import { TbListDetails, TbShoppingBagCheck } from 'react-icons/tb'
import { MdDeleteOutline } from 'react-icons/md'

import { productQuantity, shortenText } from '../helpers/helper'

import styles from "../styles/Card.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addItem, decrease, increase, removeItem } from '../features/cartSlice'

function Card({ product }) {

    const state = useSelector(store => store.cart);

    const dispatch = useDispatch()
    console.log(state);

    const { id, title, image, price } = product



    const quantity = productQuantity(state.selectedItems, id);
    


    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{shortenText(title)}</h3>
            <p>${price}</p>
            <div className={styles.actions}>
                <Link to={`/products/${id}`}>
                    <TbListDetails />
                </Link>
                <div>


                    {quantity === 1 && (
                        <button onClick={() => dispatch(removeItem(product))}>
                            <MdDeleteOutline />
                        </button>

                    )}
                    {quantity > 1 && (<button onClick={() => dispatch(decrease(product))}>
                        -
                    </button>)}

                    {!!quantity && <span>{quantity}</span>}

                    {
                        quantity === 0 ? (<button onClick={() => dispatch(addItem(product))}>
                            <TbShoppingBagCheck />
                        </button>) :
                            (<button onClick={() => dispatch(increase(product))}>
                                +
                            </button>)
                    }

                </div>
            </div>
        </div>
    )
}

export default Card