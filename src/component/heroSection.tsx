import Image from "next/image"
import styles from "../app/page.module.css";

export default function HeroSection(){
    return(
        <div className={styles.heroSection}>
            <div className={styles.detail}>
                <h2>Best Coffee</h2>
                <h3>Make your day great with our <br/> special coffee!</h3>
                <p>Welcome to our coffee paradise, where every bean tells<br/> a story and every cup sparks joy.</p>
            
            <div className={styles.btn}>
                
                <button className={styles.btn1}>Order Now</button>
                <button className={styles.btn2}>Contact Us</button>
            
            </div>
            </div>
            <div>
<Image src="/coffee.png" alt="" height={500} width={500}></Image>
            </div>
        </div>
    )
}