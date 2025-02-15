"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Contact = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 pb-16 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg"></div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-prim xl:text-sectiontitle2">
              Envoyer un message
              </h2>

              <form
                action="https://formbold.com/s/9xdAE"
                method="POST"
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    required
                    type="text"
                    name="NameLastNAme"
                    placeholder="Nom et Prénom"
                    className="w-full border-b rounded active:border-stroke bg-transparent pb-3.5 focus:border-prim focus:placeholder:text-prim focus-visible:outline-none lg:w-1/2"
                  />

                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Adresse E-mail"
                    className="w-full border-b rounded active:border-stroke bg-transparent pb-3.5 focus:border-prim focus:placeholder:text-prim focus-visible:outline-none lg:w-1/2"
                  />
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    required
                    type="text"
                    name="subject"
                    placeholder="Sujet"
                    className="w-full border-b rounded active:border-stroke bg-transparent pb-3.5 focus:border-prim focus:placeholder:text-prim focus-visible:outline-none lg:w-1/2"
                  />

                  <input
                    required
                    type="text"
                    name="tel"
                    placeholder="Numéro de Téléphone"
                    className="w-full border-b rounded active:border-stroke bg-transparent pb-3.5 focus:border-prim focus:placeholder:text-prim focus-visible:outline-none lg:w-1/2"
                  />
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    required
                    placeholder="Message"
                    name="Message"
                    rows={4}
                    className="w-full border-b rounded active:border-stroke bg-transparent focus:border-prim focus:placeholder:text-prim focus-visible:outline-none"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between">
                  <div className="mb-4 flex md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      defaultChecked
                      className="peer sr-only"
                    />
                    <span className="border-gray-300 bg-gray-100 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-prim">
                      <svg
                        className="opacity-0 peer-checked:group-[]:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <label
                      htmlFor="default-checkbox"
                      className=" max-w-[425px] cursor-pointer select-none pl-5"
                    >
                      En cliquant sur la case à cocher, vous acceptez d&apos;utiliser nos conditions <span><a href="/privacy-policy" className="hover:text-prim underline">Privacy Policy</a></span> Et consentez à l’utilisation des cookies dans le navigateur.
                    </label>
                  </div>

                  <button
                    aria-label="Envoyer Le Message"
                    type="submit"
                    className="inline-flex items-center gap-2.5 rounded-full bg-prim px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-primHov"
                  >
                    Envoyer Le Message
                    <svg
                      className="fill-white"
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                        fill=""
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-prim xl:text-sectiontitle2">
              Trouve nous
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-primHov">
                Adresse E-mail
                </h3>
                <p>
                  <a href="mailto:benhmiedayoub2@gmail.com">benhmiedayoub2@gmail.com</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-primHov">
                Numéro de Téléphone
                </h4>
                <p>
                  <a href="tel:+212 673-109815">+212 673 109 815</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

