import styles from "../app/page.module.css";

export default function Contact(){
    return(
        <div className={styles.contact}>
        <section className={styles.details} >
<h2>Contact Us</h2>

    {/* <form action="#" className={styles.form}> */}
    <form>
        <input type="text" placeholder=" name" className={styles.input} required />
        <input type="email" placeholder=" email" className={styles.input} required />
        <input type="phone" placeholder=" phone no." className={styles.input} required />

        <textarea placeholder="Your message" className={styles.input} required></textarea>
        <button className={styles.btn}>Submit</button>

    </form>

        </section>
        </div>
    )
}