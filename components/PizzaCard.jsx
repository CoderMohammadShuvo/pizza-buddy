import Image from 'next/image';
import styles from '../styles/PizzaCard.module.css';

function PizzaCard() {
  return (
    <div className={styles.container}>
         <Image src='/img/pizza.png' alt='pizza' width="500" height="500"></Image>
        <h1 className={styles.name}>Spicy Cheese Pizza</h1>
        <span className={styles.price}>$ 19.22</span>
        <p className={styles.pizzaDes}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, suscipit.</p>
       
    </div>
  )
}

export default PizzaCard