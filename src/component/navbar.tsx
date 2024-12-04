"use client"
import styles from "../app/page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Header (){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return(
        <header className={styles.header}>
            <div >
                <h2 className={styles.logo}>☕Coffee</h2>
            </div>
            <nav className={`${styles.navbar} ${menuOpen ? styles.open : ""}`}>
            <ul className={styles.navlinks}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>

            </nav>
            <div className={styles.hamburger} onClick={toggleMenu}>
        {/* Hamburger menu icon */}
        <span></span>
        <span></span>
        <span></span>
      </div>
        </header>
    )
}