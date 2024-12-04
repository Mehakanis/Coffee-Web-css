import classNames from "classnames";
import Image from "next/image";
import styles from "../app/page.module.css";


export default function About(){
    return(
        <section className={styles.about}>
            <div className={styles.content}>
                <div className={styles.image}>
<Image src="/about-image.jpg" alt="" width={400} height={400}
className={styles.img}></Image>
                </div>
                <div className={styles.details}>
                    <h2 className={styles.title}>About Us</h2>
                    <p className={styles.text}>
                        At Coffee House in Berndorf, Germany, we pride ourselves on being a go-to destination for coffee lovers and conversation seekers alike. {"we're"} dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.
                    </p>
                    <div className={styles.link}>
                        <a href="#" className={styles.social}>
                        <i className={classNames(styles.fa_brand, styles.fa_facebook)}></i></a>
                        <a href="#" className={styles.social}>
                        <i className={classNames(styles.fa_brand, styles.fa_instagram)}></i></a>
                        <a href="#" className={styles.social}>
                        <i className={classNames(styles.fa_brand, styles.fa_twitter)}></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}