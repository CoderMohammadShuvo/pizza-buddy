import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" height="32" width="32"></Image>
        </div>
       <div className={styles.callTexts}>
       <div className={styles.callText}>ORDER NOW!</div>
        <div className={styles.callText}>012 345 678</div>
       </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.items}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" height="69" width="150" alt='logo'></Image>
          <li className={styles.listItem}>Event</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src="/img/cart.png" height="32" width="32"></Image>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
