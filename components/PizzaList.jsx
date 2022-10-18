import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

function PizzaList() {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nesciunt labore obcaecati, fugiat odit dolor. Eligendi iure a voluptate ad reprehenderit, voluptates, accusantium reiciendis harum rem illo debitis necessitatibus! Ducimus!</p>
        <div className={styles.wrapper}>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
            <PizzaCard/>
        </div>
    </div>
  )
}

export default PizzaList;