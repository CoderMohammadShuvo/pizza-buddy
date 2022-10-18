import Image from 'next/image';
import styles from '../../styles/Order.module.css';


function Order() {
    const status = 0;

    const statusClass = (index) =>{
        if(index - status < 1) return styles.done;
        if(index - status === 1) return styles.inProgress;
        if(index - status > 1) return styles.undone;
    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
                <tbody>
                <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Customer Address</th>
                    <th>Total Price</th>
                    
                </tr>
                <tr>
                    <td><span className={styles.id}>12242343453</span></td>
                    <td><span className={styles.name}>Mohammad Shuvo</span></td>
                    <td><span className={styles.address}>D-101, Safipur, Dhaka</span></td>
                    <td><span className={styles.price}>$82.22</span></td>
                    
                </tr>
                
                </tbody>
            </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width="30" height="30" alt="paid" />
                    <span>Payment</span>
                    <div className={styles.checkOutIcon}>
                        <Image className={styles.checkIcon} src="/img/checked.png" height='20' width='20'></Image>
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/bake.png" width="30" height="30" alt="paid" />
                    <span>Preparing</span>
                    <div className={styles.checkOutIcon}>
                        <Image className={styles.checkIcon} src="/img/checked.png" height='20' width='20'></Image>
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/bike.png" width="30" height="30" alt="paid" />
                    <span>On the way</span>
                    <div className={styles.checkOutIcon}>
                        <Image className={styles.checkIcon} src="/img/checked.png" height='20' width='20'></Image>
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/delivered.png" width="30" height="30" alt="paid" />
                    <span>Delivered</span>
                    <div className={styles.checkOutIcon}>
                        <Image className={styles.checkIcon} src="/img/checked.png" height='20' width='20'></Image>
                    </div>
                </div>
            </div>
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
                <button disabled className={styles.paidButton}>PAID</button>
                
            </div>
        </div>
    </div>
  )
}

export default Order;