import React from 'react'
import styles from "@/components/slider/page.module.css"
import Image from 'next/image'

export default function Slider() {
  return (
      <section className={styles.container}>
            <div className={styles.sliderWraper}>
                  <div className={styles.slide}>
                              <Image 
                                    src={"/desneyimg/s1.jpeg"}
                                    width={300}
                                    height={400}
                              />
                  </div>
            </div>
      </section>
  )
}
 