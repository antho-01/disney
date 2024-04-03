"use client"
import React from 'react'
import Image from 'next/image'
import styles from "@/app/section2/[route]/page.module.css"
import { BiPlay } from 'react-icons/bi'


export default function Page({params}) {
      let overView = {
            marvel: [
                  {     text: "The Marvels",
                        bg: "/desneyimg/bg3.webp",
                        src:"/desneyimg/mervelmovie.jpeg",
                        Article: ()=>{
                              return(
                                    <article className={styles.articles}>
                                          <h2 className={styles.ovw}>OverView</h2>
                                          <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo earum pariatur sunt sed beatae repellat amet. Maiores, dolorum et!
                                          </p><br />
                                          <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error placeat porro, adipisci dolorem, ut soluta natus ad excepturi magni ullam consequuntur iste in itaque maxime iure! Soluta facilis laboriosam error, quisquam ex ducimus corporis doloremque eius architecto magnam ipsa placeat. Deleniti porro aliquam ducimus voluptate incidunt non sed inventore voluptatem.
                                          </p><br />

                                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quam hic accusantium dolores soluta, explicabo placeat fugiat earum minima ullam. Similique quo deleniti aut itaque minima natus optio neque quia magni excepturi assumenda velit dolore obcaecati voluptatem consequuntur numquam ex perferendis quod nostrum accusantium molestias illo, facilis perspiciatis deserunt. Eos soluta provident animi odit expedita architecto quia repellat voluptatum nesciunt fugit, aut iusto vero quis eum mollitia minus accusamus unde officia dolor et hic ipsum! Amet eum fugit molestias, quis voluptates, dolore hic numquam adipisci mollitia, voluptatibus vitae ea incidunt sit est consequatur praesentium dolorem explicabo reiciendis accusamus nam dolores.</p>
                                    </article>
                              )
                        }

                  }
            ], 

            percyjackson: [
                  {
                        text: "Percy Jackson And The Olympians",
                        bg: "/desneyimg/bg3.webp",
                        src:"/desneyimg/percyjacksonmovie.jpeg",
                        Article: ()=>{
                              return(
                                    <article className={styles.articles}>
                                          <h2 className={styles.ovw}>OverView</h2>
                                          <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo earum pariatur sunt sed beatae repellat amet. Maiores, dolorum et!
                                          </p><br />
                                          <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error placeat porro, adipisci dolorem, ut soluta natus ad excepturi magni ullam consequuntur iste in itaque maxime iure! Soluta facilis laboriosam error, quisquam ex ducimus corporis doloremque eius architecto magnam ipsa placeat. Deleniti porro aliquam ducimus voluptate incidunt non sed inventore voluptatem.
                                          </p><br />

                                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quam hic accusantium dolores soluta, explicabo placeat fugiat earum minima ullam. Similique quo deleniti aut itaque minima natus optio neque quia magni excepturi assumenda velit dolore obcaecati voluptatem consequuntur numquam ex perferendis quod nostrum accusantium molestias illo, facilis perspiciatis deserunt. Eos soluta provident animi odit expedita architecto quia repellat voluptatum nesciunt fugit, aut iusto vero quis eum mollitia minus accusamus unde officia dolor et hic ipsum! Amet eum fugit molestias, quis voluptates, dolore hic numquam adipisci mollitia, voluptatibus vitae ea incidunt sit est consequatur praesentium dolorem explicabo reiciendis accusamus nam dolores.</p>
                                    </article>
                              )
                        }
                  }
            ],

            bug: [

                  {
                        text: "A Real Bug's Life",
                        bg: "/desneyimg/bg3.webp",
                        src:"/desneyimg/bugmovie.jpeg",
                        Article: ()=>{
                              return(
                                    <article className={styles.articles}>
                                          <h2 className={styles.ovw}>OverView</h2>
                                          <p>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates, nemo earum pariatur sunt sed beatae repellat amet. Maiores, dolorum et!
                                          </p><br />
                                          <p>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error placeat porro, adipisci dolorem, ut soluta natus ad excepturi magni ullam consequuntur iste in itaque maxime iure! Soluta facilis laboriosam error, quisquam ex ducimus corporis doloremque eius architecto magnam ipsa placeat. Deleniti porro aliquam ducimus voluptate incidunt non sed inventore voluptatem.
                                          </p><br />

                                          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quam hic accusantium dolores soluta, explicabo placeat fugiat earum minima ullam. Similique quo deleniti aut itaque minima natus optio neque quia magni excepturi assumenda velit dolore obcaecati voluptatem consequuntur numquam ex perferendis quod nostrum accusantium molestias illo, facilis perspiciatis deserunt. Eos soluta provident animi odit expedita architecto quia repellat voluptatum nesciunt fugit, aut iusto vero quis eum mollitia minus accusamus unde officia dolor et hic ipsum! Amet eum fugit molestias, quis voluptates, dolore hic numquam adipisci mollitia, voluptatibus vitae ea incidunt sit est consequatur praesentium dolorem explicabo reiciendis accusamus nam dolores.</p>
                                    </article>
                              )
                        }
                  }
            ]
      }

      const data1 = overView[params.route]
  return (
            <div>
                  {
                        data1.map((movies)=>{
                              return (
                                    <>
                                          <div className={styles.hero}>
                                                {/* <Image 
                                                      src={movies.bg}
                                                      layout="fill"
                                                /> */}
                                                <h1 className={styles.h1}>Disney Land Present</h1>

                                                <p className={styles.writeUp}>
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                      Aliquid deserunt assumenda, amet quaerat error sapiente.
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                      Consequuntur odit obcaecati accusantium magnam sed ipsum
                                                       veniam laborum distinctio quidem modi.
                                                </p>

                                                <span className={styles.button}><BiPlay className={styles.icon}/></span>
                                          </div>

                                          <h2 className={styles.theme}>{movies.text}</h2>

                                          <div className={styles.container}>
                                                <div className={styles.imgCon}>
                                                      <Image 
                                                            src={movies.src}
                                                            layout='fill'
                                                      />
                                                </div>

                                                <div className={styles.text}>
                                                      {movies.Article()}
                                                </div>

                                          </div>

                                   
                                         
                                   </>
                              )
                        })
                  }

            </div>
  )
}
