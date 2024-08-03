import { useDispatch } from "react-redux"

import { checkout } from "../features/cartSlice"

import { BsPatchCheck } from "react-icons/bs"
import { FaHashtag } from "react-icons/fa"
import { TbChecklist } from "react-icons/tb"

import styles from "../styles/CheckoutSidebar.module.css"

function CheckoutSidebar({ state }) {

    const dispatch = useDispatch()

    return (
        <div className={styles.sidebar}>
            <div>
                <TbChecklist />
                <p>Total:</p>
                <span>{state.total}</span>
            </div>
            <div>
                <FaHashtag />
                <p>Quantity:</p>
                <span>{state.itemsCounter}</span>
            </div>
            <div>
                <BsPatchCheck />
                <p>Status:</p>
                <span>{!state.checkout && "Pending..."}</span>
            </div>
            <button onClick={() => dispatch(checkout(state))}>Checkout</button>
        </div>
    )
}

export default CheckoutSidebar