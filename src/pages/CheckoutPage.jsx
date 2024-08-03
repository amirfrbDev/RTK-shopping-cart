import CheckoutCard from "../components/CheckoutCard";
import CheckoutSidebar from "../components/CheckoutSidebar";

import emptyCart from "../assets/empty-cart.png"

import { addItem, removeItem, increase, decrease, checkout } from "../features/cartSlice"

import styles from "../styles/CheckoutPage.module.css"
import { useDispatch, useSelector } from "react-redux";

function CheckoutPage() {
  const state = useSelector(store => store.cart)

  if (!state.itemsCounter) {
    return <div className={styles.emptyContainer}>
      <img src={emptyCart} alt="Cart is empty!" />
    </div>
  }

  return (
    <div className={styles.container}>
      <CheckoutSidebar state={state} />
      <div className={styles.products}>
        {
          state.selectedItems.map(product =>
            <CheckoutCard key={product.id} product={product} />
          )
        }
      </div>
    </div>
  )
}

export default CheckoutPage