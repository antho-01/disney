import React from 'react'
import styles from '@/app/section3/[route]/page.module.css'
import Image from 'next/image'
import { BiPlay } from 'react-icons/bi'
export default function page({params}) {
      let Overview = {
            Insideout: [
                  {
                        text: "Inside Out 2",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/inout2.jpeg",
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

            Problemista: [
                  {
                        text: "Problemista",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m1.jpeg",
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

            Quantumania: [
                  {
                        text: "Quantumania",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m2.jpeg",
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

            Beekeeper: [
                  {
                        text: "The Beekeeper",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m3.jpeg",
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

            Panda4: [
                  {
                        text: "Panda 4",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m4.jpeg",
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

            Antesdeti: [
                  {
                        text: "Antesdeti",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m5.jpeg",
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

            Venom: [
                  {
                        text: "Venom",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m6.jpeg",
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

            Lenin: [
                  {
                        text: "Lenin",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m7.jpeg",
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

           GiJoeTheRiseOfCobra: [
                  {
                        text: "G.i.Joe The Rise Of Cobra",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m8.jpeg",
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

            Xmen: [
                  {
                        text: "X-men Future Past",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m9.jpeg",
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

            Wish : [
                  {
                        text: "Wish I Was Here",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m10.jpeg",
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

            // section 2

            KPF4: [
                  {
                        text: "Kunfu panda 4",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m11.jpeg",
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

            Anime: [
                  {
                        text: "Problemista",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m12.jpeg",
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

            AnimalKingdom: [
                  {
                        text: "Animal Kingdom",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m13.jpeg",
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

            Pushpa: [
                  {
                        text: "Pushpa",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m14.jpeg",
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

            SpiderMan: [
                  {
                        text: "Spider Man",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m15.jpeg",
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

            Vamps: [
                  {
                        text: "Vamps",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m16.jpeg",
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

            Venom: [
                  {
                        text: "G-i-Joe Retaliation",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m17.jpeg",
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

            Thegrandfather: [
                  {
                        text: "The Grand Father",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m18.jpeg",
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

          Xmenfirstclass: [
                  {
                        text: "X-men first class",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m19.jpeg",
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

            Hairy: [
                  {
                        text: "Hairy",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m20.jpeg",
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

            Ifiwhereking: [
                  {
                        text: "If I Where King",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m21.jpeg",
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

            

            AnimalKingdom: [
                  {
                        text: "Animal Kingdom",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m22.jpeg",
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

            Horror: [
                  {
                        text: "Horror",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m23.jpeg",
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

          Red: [
                  {
                        text: "Red",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m24.jpeg",
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

            ResidentEvil: [
                  {
                        text: "Respident Evil The final Episode",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m25.jpeg",
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

            Loveliesbleeding: [
                  {
                        text: "Love Lies Bleeding",
                        bg: "/desneyimg/bg.webp",
                        src:"/desneyimg/m26.jpeg",
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



      }

      const data1 = Overview[params.route]
  return (
    <div>
                 {
                        data1.map((movies)=>{
                              return (
                                    <>
                                          <div className={styles.hero}>
                                                <Image 
                                                      src={movies.bg}
                                                      layout="fill"
                                                />
                                                <h1 className={styles.h1}>Disney and lucas movies</h1>

                                                <p className={styles.writeUp}>
                                                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                      Aliquid deserunt assumenda, amet quaerat error sapiente. 
                                                      <br /><br />
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
