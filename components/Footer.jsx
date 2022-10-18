import Image from 'next/image';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}> 
        <Image src='/img/bg.jpg' layout='fill' alt="image"></Image>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>OH YES, WE DID PIZZA BUDDY, WELL BAKED SLICE OF PIZZA.</h2>
        </div>  
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.locationText}>133, Demo Road <br /> Banani, 4454 <br /> 123 405 605</p>
          <p className={styles.locationText}>133, Demo Road <br /> Banani, 4454 <br /> 123 405 605</p>
          <p className={styles.locationText}>133, Demo Road <br /> Banani, 4454 <br /> 123 405 605</p>
          <p className={styles.locationText}>133, Demo Road <br /> Banani, 4454 <br /> 123 405 605</p>
        </div>  

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.locationText}>MONDAY UNTIL FRIDAY <br />9:00 - 22:00</p>
          <p className={styles.locationText}>SATURDAY and SUNDAY <br />12:00 - 24:00</p>
        </div>  
      </div>
    </div>
  )
}

export default Footer