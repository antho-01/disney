import Image from 'next/image'
import React from 'react'
import styles from "@/components/navigation/page.module.css"
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Link from 'next/link';

export default function Navigation() {
  return (
    <header className={styles.header}>
            <nav className={styles.navigation}>
                  <div className={styles.imgContainer}>
                        <Image 
                              fill={true}
                              src={"/desneyimg/disneyblack.png"}                    
                        />
                  </div>

                        <input type="checkbox" className={styles.check} id='toggle' />
                        <label htmlFor="toggle" className={styles.button}>&nbsp;</label>
                                 

                  <div className={styles.dropDown}>
                        <span className={styles.dropDownButton}> disney+  </span>
                        <ul className={styles.dropDownList}>
                              <li className={styles.list}>find out more</li>
                              <li className={styles.list}> introducing disney+ </li>
                        </ul>
                  </div>

                  <div className={styles.dropDown}>
                        <span className={styles.dropDownButton}> movies </span>
                        <ul className={styles.dropDownList}>
                              <li className={styles.list}>Featured</li>
                              <li className={styles.list}><Link className={styles.anchor} href={"/section3/Insideout"}>Inside Out two</Link></li>
                              <li className={styles.list}> Lucasfilm Movies </li>
                              <li className={styles.list}> Marvel Movies </li>
                              <li className={styles.list}> Pixar Movies </li>
                        </ul>
                  </div>

                  
            {/* for small screen */}

                  <div className={styles.smallNavigation}>

                        <div className={styles.sDropDown}>
                              <input type='checkbox' id='btn1' className={styles.sCheck}/>
                              <label htmlFor="btn1" className={styles.sDropDownButton}> Disney+ <span className={styles.icon}><RiArrowRightDoubleFill/></span></label>
                              <ul className={styles.sList}>
                                    <li className={styles.sItems}>Find More</li>
                                    <li className={styles.sItems}>indroducing Disney+</li>
                              </ul>
                        </div>

                        <div className={styles.horizontalRule}></div>

                        <div className={styles.sDropDown1}>
                              <input type='checkbox' id='btn2' className={styles.sCheck1}/>
                              <label htmlFor="btn2" className={styles.sDropDownButton1}> Movies <span className={styles.icon1}><RiArrowRightDoubleFill/></span></label>
                              <ul className={styles.sList1}>
                                    <li className={styles.sItems}>Feature</li>
                                    <li className={styles.sItems}><Link href={"/section3/Insideout"}>Inside Out two</Link></li>
                                    <li className={styles.sItems}>Luscasfilm movie</li>
                                    <li className={styles.sItems}>Marvel movie</li>
                              </ul>
                        </div>

                  </div>

                  {/* Small navigation ends here */}
            </nav>
            
    </header>
  )
}
