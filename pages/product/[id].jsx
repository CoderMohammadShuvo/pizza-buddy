import Image from 'next/image';
import { useState } from 'react';
import styles from '../../styles/Product.module.css';


function Product() {
    const [size, setSize] = useState(0);
    const pizza = {
        id:1,
        img:"/img/pizza.png",
        name:"JEALOUS",
        price:[19.4, 24.4, 27.9],
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis numquam voluptate minima quasi recusandae omnis blanditiis veritatis error sequi, velit repudiandae labore nisi sed perferendis nobis pariatur eos consequuntur optio? Consectetur at deserunt quos mollitia et illum perspiciatis id itaque, eius, velit quasi dolor ipsam inventore iusto nemo omnis aspernatur."

  }

  return (  
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" alt="product Image"></Image>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>$ {pizza.price[size]}</span>
            <p className={styles.des}>{pizza.desc}</p>
            <h3 className={styles.sizeTitle}>CHOOSE THE SIZES</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={()=>{setSize(0)}}>
                    <Image src="/img/size.png" layout='fill' alt="Pizza Size"></Image>
                    <span className={styles.sizeText} >Small</span>
                </div>
                <div className={styles.size} onClick={()=>{setSize(1)}}>
                    <Image src="/img/size.png" layout='fill' alt="Pizza Size" ></Image>
                    <span className={styles.sizeText}>Medium</span>
                </div>
                <div className={styles.size} onClick={()=>{setSize(2)}}>
                    <Image src="/img/size.png" layout='fill' alt="Pizza Size" ></Image>
                    <span className={styles.sizeText}>Large</span>
                </div>
            </div>
            <h3 className={styles.sizeTitle}>Choose Additional Ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type="checkbox" id="double" name="double" className={styles.checkbox} />
                    <label htmlFor="double">Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox} />
                    <label htmlFor="cheese">Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="spice" name="spice" className={styles.checkbox} />
                    <label htmlFor="spice">Extra Spicy Sauce</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox} />
                    <label htmlFor="garlic">Extra Garlic Sauce</label>
                </div>
            </div>
            <div className={styles.quantity}>
                <input type="number" defaultValue={1} className={styles.quantityInput} />
                <button className={styles.button}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product