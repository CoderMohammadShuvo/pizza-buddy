import Image from 'next/image';
import styles from '../styles/Cart.module.css';

function cart() {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
                <tbody>
                <tr>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extra</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png" layout="fill" objectFit="cover" ></Image>
                        </div>
                    </td>
                    <td><span className={styles.name}>JEALOUS</span></td>
                    <td><span className={styles.extra}>Double Ingredients, Spicy Sauce</span></td>
                    <td><span className={styles.price}>$19.4</span></td>
                    <td><span className={styles.quantity}>2</span></td>
                    <td><span className={styles.total}>$38.8</span></td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png" layout="fill" objectFit="cover" ></Image>
                        </div>
                    </td>
                    <td><span className={styles.name}>JEALOUS</span></td>
                    <td><span className={styles.extra}>Double Ingredients, Spicy Sauce</span></td>
                    <td><span className={styles.price}>$19.4</span></td>
                    <td><span className={styles.quantity}>2</span></td>
                    <td><span className={styles.total}>$38.8</span></td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.imgContainer}>
                            <Image src="/img/pizza.png" layout="fill" objectFit="cover" ></Image>
                        </div>
                    </td>
                    <td><span className={styles.name}>JEALOUS</span></td>
                    <td><span className={styles.extra}>Double Ingredients, Spicy Sauce</span></td>
                    <td><span className={styles.price}>$19.4</span></td>
                    <td><span className={styles.quantity}>2</span></td>
                    <td><span className={styles.total}>$38.8</span></td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b> $78.54
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount:</b> $78.54
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total:</b> $78.54
                </div>
                <button className={styles.checkoutButton}>Checkout Now!</button>
                
            </div>
        </div>
    </div>
  )
}

export default cart