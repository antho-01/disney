import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '@/app/section3/page.module.css'

export default function Section3() {
  return (
    <section className={styles.section3}>
                  <h2>Movies</h2>

                 <div className={styles.route}>

                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                <Link href="/section3/Insideout">
                                                <Image 
                                                      src={"/desneyimg/inout2.jpeg"}
                                                      layout='fill'
                                                      className={styles.dimg}
                                                />
                                                
                              </Link> 
                              </div>
                              <p className={styles.s3p}>InSide out 2</p>
                        </div>

                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                  <Link href="/section3/Problemista">
                                    <Image 
                                          src={"/desneyimg/m1.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                              
                                  </Link>
                              </div>
                              <p className={styles.s3p}>Problemista</p>
                        </div>
                           
                       
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                   <Link href="/section3/Quantumania">
                                    <Image 
                                          src={"/desneyimg/m2.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                    
                                    </Link>
                              </div>
                              <p className={styles.s3p}>Quantumania</p>
                        </div>
                      
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Beekeeper">
                                    <Image 
                                          src={"/desneyimg/m3.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />              
                                                  
                              </Link>
                              </div>
                              <p className={styles.s3p}>The Beekeeper</p> 
                        </div>

                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                  <Link href="/section3/Panda4">
                                    <Image 
                                          src={"/desneyimg/m4.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />                
                                               
                                    </Link>
                              </div>
                              <p className={styles.s3p}>panda 4</p>  
                        </div>
                       
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Antesdeti">
                                    <Image 
                                          src={"/desneyimg/m5.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                    
                              </Link>
                              </div>
                              <p className={styles.s3p}>Antesdeti</p>
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                  <Link href="/section3/GiJoeRetaliation">
                                    <Image 
                                          src={"/desneyimg/m6.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                    
                                    </Link>
                              </div>
                              <p className={styles.s3p}>G.I.joe retaliation</p>
                        </div>
                       
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                   <Link href="/section3/Lenin">
                                    <Image 
                                          src={"/desneyimg/m7.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                    
                                    </Link>
                              </div>
                              <p className={styles.s3p}>Lenin</p>
                        </div>
                      
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/GiJoeTheRiseOfCobra">
                                    <Image 
                                          src={"/desneyimg/m8.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />              
                                              
                                    </Link>
                              </div>
                              <p className={styles.s3p}>G.I.joe the rise of cobra</p>     
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                  <Link href="/section3/Xmen">
                                    <Image 
                                          src={"/desneyimg/m9.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />                
                                                
                                    </Link>
                              </div>
                              <p className={styles.s3p}>x-men days of future past</p> 
                        </div>
                       
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Wish">
                                    <Image 
                                          src={"/desneyimg/m10.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                   
                              </Link>
                              </div>
                               <p className={styles.s3p}>Wish i was here </p>
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/KFP4">
                                    <Image 
                                          src={"/desneyimg/m11.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                    
                                    </Link>
                              </div>
                              <p className={styles.s3p}>KFP4</p>
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Anime">
                                    <Image 
                                          src={"/desneyimg/m12.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                   
                                    </Link>
                              </div>
                              <p className={styles.s3p}>anime</p>
                        </div>
                        

                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                   <Link href="/section3/AnimalKingdom">
                                    <Image 
                                          src={"/desneyimg/m13.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />              
                                                 
                                    </Link>                       
                              </div>
                              <p className={styles.s3p}>Animal Kingdom</p>  
                        </div>
                      
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Pushpa">
                                    <Image 
                                          src={"/desneyimg/m14.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />                
                                              
                                    </Link>
                              </div>
                              <p className={styles.s3p}>Pushpa</p>   
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Spiderman">
                                    <Image 
                                          src={"/desneyimg/m15.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                    
                                    </Link>
                              </div>
                              <p className={styles.s3p}>spiderman</p>
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Vamps">
                                    <Image 
                                          src={"/desneyimg/m16.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                    
                                    </Link>
                              </div>
                              <p className={styles.s3p}>Vamps</p>
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Venom">
                                    <Image 
                                          src={"/desneyimg/m17.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                    
                              </Link>
                              </div>
                              <p className={styles.s3p}>Venom</p>
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Thegrandfather">
                                    <Image 
                                          src={"/desneyimg/m18.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />              
                                                  
                                    </Link>

                              </div>
                              <p className={styles.s3p}>The GrandFather</p> 
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Xmenfirstclass">
                                    <Image 
                                          src={"/desneyimg/m19.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />                
                                                
                              </Link>
                              </div>

                              <p className={styles.s3p}>X-Men first class</p> 
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                  <Link href="/section3/Hairy">
                                    <Image 
                                          src={"/desneyimg/m20.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />
                                    
                                  </Link>
                              </div>
                              <p className={styles.s3p}>Hairy</p>
                        </div>
                       
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                 <Link href="/section3/Ifiwhereking">
                                    <Image 
                                          src={"/desneyimg/m21.jpeg"}
                                          layout='fill'
                                          className={styles.dimg}
                                    />              
                                               
                              </Link>
                              </div>
                               <p className={styles.s3p}>If i were King</p>   
                        </div>

                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                    <Link href="/section3/Animalkingdom">
                                          <Image 
                                                src={"/desneyimg/m22.jpeg"}
                                                layout='fill'
                                                className={styles.dimg}
                                          />              
                                                        
                                    </Link>
                              </div>
                              <p className={styles.s3p}>Animal Kingdom</p> 
                        </div>

                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                    <Link href="/section3/Horror">
                                          <Image 
                                                src={"/desneyimg/m23.jpeg"}
                                                layout='fill'
                                                className={styles.dimg}
                                          />              
                                                        
                                    </Link>
                              </div>
                              <p className={styles.s3p}>Horror</p> 
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                    <Link href="/section3/Red">
                                          <Image 
                                                src={"/desneyimg/m24.jpeg"}
                                                layout='fill'
                                                className={styles.dimg}
                                          />                
                                                     
                                    </Link>
                              </div>
                              <p className={styles.s3p}>Red</p>  
                        </div>
                        
                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                    <Link href="/section3/ResidentEvil">
                                          <Image 
                                                src={"/desneyimg/m25.jpeg"}
                                                layout='fill'
                                                className={styles.dimg}
                                          />                
                                                    
                                    </Link>
                              </div>
                              <p className={styles.s3p}>Resident Evil</p>   
                        </div>

                        <div className={styles.overflow}>
                              <div className={styles.img}>
                                    <Link href="/section3/Loveliesbleeding">
                                          <Image 
                                                src={"/desneyimg/m26.jpeg"}
                                                layout='fill'
                                                className={styles.dimg}
                                          />                
                                                     
                                    </Link>
                              </div>
                              <p className={styles.s3p}>Love lies bleeding</p>  
                        </div>
                       
                      
           </div>

      
    </section>
  )
}
