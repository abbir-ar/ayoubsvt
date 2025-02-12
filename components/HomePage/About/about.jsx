'use client';
import { motion } from "framer-motion";
import Image from "next/image";


const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30" id="about">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 items-center">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mt-[15%] hidden aspect-[588/526.5] md:block md:w-1/2 "
            >

          {/* <Video 
          src="."
          accentColor="#9400ff"
          className="h-90 w-full mt-48 mb-32" /> */}
          <iframe width="100%" height="70%" src="https://www.youtube.com/embed/22TuvwA7DpA?si=rj8Uc5em5gvtLdJN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className="rounded-lg"></iframe>
            
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <span className="font-medium uppercase text-primLabo">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-prim px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "}
                AyoubSVT | SCIENCES DES SVT
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-primLabo xl:text-hero">
               LES RESSOURCES 
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-primHovOfHov">
                ÉDUCATIVES
                </span>
              </h2>
              <p>
              Pour au site pédagogique, nous avons décidé de diviser le site en deux parties : la première est constituée de cours théoriques et la seconde est constituée de cours appliqués, qui sont :
              </p>

              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke">
                  <p className="text-metatitle2 font-semibold text-primLabo">
                    01
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-primLabo">
                    AyoubSVT | RESSOURCES ÉDUCATIVES
                  </h3>
                  <p>Comprend des cours Théoriques.</p>
                </div>
              </div>
              <div className="mt-7.5 flex items-center gap-5">
                <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke">
                  <p className="text-metatitle2 font-semibold text-primLabo">
                    02
                  </p>
                </div>
                <div className="w-3/4">
                  <h3 className="mb-0.5 text-metatitle2 text-primLabo">
                     Virtule-ZX10 | Laboratoire virtuel
                  </h3>
                  <p>Comprend des leçons Pratiques.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              <h4 className="font-medium uppercase text-prim">
              <span className="font-medium uppercase text-primLabo">
                <span className="mb-4 mr-4 inline-flex rounded-full bg-prim px-4.5 py-1 text-white uppercase">
                  New
                </span>{" "}
                Virtule-ZX10 | Laboratoire virtuel
              </span>
              </h4>
              <h2 className="relative mb-6 text-3xl font-bold text-primLabo">
                Laboratoire virtuel {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-primHovOfHov dark:before:bg-titlebgdark">
                 Virtule-ZX10 
                </span>
              </h2>
              <p>
              Étudier devient plus agréable avec nous grâce aux moyens nouveaux et innovants que nos outils offrent pour une meilleure éducation.
              </p>
              <div>
                <a
                  href="/dashboard"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-primLabo hover:text-prim"
                >
                  <span className="duration-300 group-hover:pr-2">
                  Virtule-ZX10 
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/showLaboF.png"
                alt="About"
                sizes="(max-width: 486px) 100vw"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
