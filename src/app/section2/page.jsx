import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "@/app/section2/page.module.css"
export default function Section2() {
  return (
    <section className={styles.section2}>
            <h2>What's on Disney+</h2>
           
           <div className={styles.route}>

                        <div className={styles.overflow}>
                              <div className={styles.card}>
                              <Link href="/section2/marvel">
                                    <Image 
                                          src={"/desneyimg/mervelmovie.jpeg"}
                                          layout='fill'  
                                          className={styles.myimg}                                        
                                    />
                                    
                              </Link>
                              </div>
                              <p className={styles.title}>The Marvel</p>
                        </div>
                  
                        
                        <div className={styles.overflow}>
                              <div className={styles.card}>
                               <Link href="/section2/percyjackson">
                                    <Image 
                                          src={"/desneyimg/percyjacksonmovie.jpeg"}
                                          layout='fill'
                                          className={styles.myimg}
                                    />
                              </Link>
                              </div>
                              <p className={styles.title}>Percy Jackson and The Olympians</p>

                        </div>
                       
                        <div className={styles.overflow}>
                              <div className={styles.card}>
                                <Link href="/section2/bug">              
                                    <Image 
                                          src={"/desneyimg/bugmovie.jpeg"}
                                          layout='fill'
                                          className={styles.myimg}
                                    />
                                    
                              </Link>
                              </div>
                              <p className={styles.title}>A Real Bug's Life</p>
                        </div>
                      
                  

           </div>

            <div className={styles.imgcontainerLogo}>
                  <Image 
                        src={"/desneyimg/brandicons.png"}
                        fill={true}
                  />
            </div>

            <p className={styles.spanS}> <span > Subscribe Now* </span> </p>

            <p className={styles.terms}>  *Terms And Condition Apply </p>
      
    </section>
  )
}
