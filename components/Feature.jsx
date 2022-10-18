import Image from "next/image";
import { useState } from "react";
import styles from '../styles/Feature.module.css';

function Feature() {
    const [index, setIndex] = useState(0);
    const images = [
        "/img/pizzaBuddyFIrstSLider.png",
        "/img/pizzaBuddyFIrstSLider.png",
        "/img/pizzaBuddyFIrstSLider.png",
    ]
    const handleArrow = (direction) =>{
        if(direction === "l"){
            setIndex(index !== 0 ? index - 1: 2);
        }
        if(direction === "r"){
            setIndex(index !== 2 ? index + 1: 0);
        }
    }
    console.log(index);
  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}} onClick={()=>handleArrow('l')}>
        <Image src="/img/arrowl.png" alt="leftarrow" layout="fill"></Image>

        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            
               {
                images.map((img, i)=>(
                    <div className={styles.imageContainer} key={i} >
                        <Image src={img} alt="slide image" layout="fill" ></Image>
                    </div>
                ))
               }
          
        </div>
       <div className={styles.arrowContainer} style={{right:0}} onClick={()=>handleArrow('r')}>
       <Image src="/img/arrowr.png" alt="leftarrow" layout="fill"></Image>

       </div>
    </div>
  )
}

export default Feature