import styles from "@/app/page.module.css"
import Button from "@/components/button/page"
import Section2 from "@/app/section2/page"
import Section3 from "@/app/section3/page"
import Image from "next/image"

export default function Home() {
  return (
      <>
            <div className={styles.overflow}>
                  <div className={styles.container}>

                        <div className={styles.tag}>

                        <div className={styles.TagImgContainer}>
                                    <Image 
                                                src={"/desneyimg/taylorswiftflyer.png"}
                                                layout="fill"
                                    />
                        </div>

                              <p className={styles.highlight}>
                                    Include "cardigan" and four additional acoustic songs. <br />
                                    now streaming on Disney+

                              </p>

                              <span className={styles.button}> subscribe us* </span> 
                        
                        </div>

                  </div>
            </div>

            {/* FOR SMALL SCREEN  */}

            <div className={styles.smallScreen}>
                  <div className={styles.ssImgCon}>
                        <Image
                         src={"/desneyimg/taylorswift.jpeg"} 
                         layout="fill"
                        
                        />
                  </div>

                  <div className={styles.ssText}>
                        <div className={styles.ssTextImgCon}>
                              <Image
                              src={"/desneyimg/taylorswiftflyer.png"} 
                              layout="fill"
                              
                              />
                        </div>

                        <div className={styles.text}>
                              <p> 
                              Include "cardigan" and four additional acoustic songs.
                              now streaming on Disney+
                              </p>
                              <span>subscribe us*</span>
                        </div>

                  </div>
            </div>

      {/* SMALL SCREEN ENDS HERE  */}
      
            
           
           
            <Section2/>
            <Section3/>

      </>

  )
}
