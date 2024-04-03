import styles from "@/components/footer/page.module.css"
import { BiLogoFacebookCircle } from "react-icons/bi";



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.p1}>Follow Disney on:</p>
      <p className={styles.p2}> <BiLogoFacebookCircle className={styles.ficon} /> </p>
      <p className={styles.flogo}>
            <img src="/desneyimg/disneyblack.png" alt="" />
      </p> 
      
      <div className={styles.writeUps}>
            <p>Help</p>
            <p>SetMap</p>
            <p>terms of use</p>
            <p>Privac policy</p>
            <p>cookie policy</p>
            <p>Manage your cookie settings</p>
            <p>Interest based ads</p>
            <p>About us</p>
            <p>PAIA Manual</p>
            <p>The Walt Disney Company</p>
      </div>
      
      <p className={styles.privacy}>
        &copy; Disney &copy; Disney.Pixar &copy & <small><sup>TM</sup></small> Lucasfilm LTD
        &copy; Marvel. All Rights Reserved
      </p>
      
    </footer>
  )
}
