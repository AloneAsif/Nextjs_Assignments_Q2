"use client";

import Image from "next/image";
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Cards() {
  return (
    <main>
      {/* main wraper div */}
      <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 px-6 sm:px-12 ">
        {/* card 1*/}

        <Link href={"./pages/blog_pages/blog_1"}>
          <div className="sm:max-w-md shadow-xl p-2 ">
            {/* Image div */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeInOut", delay: 1 }}
              className=" object-contain mb-5 flex justify-center items-center"
            >
              <Image
                className="rounded-lg"
                width={250}
                height={250}
                src={
                  "https://m.media-amazon.com/images/I/61J8i5pJi6L._AC_SY695_.jpg"
                }
                alt={""}
              ></Image>
            </motion.div>

            {/* content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 1.5, duration: 1.5 }}
              className="space-y-2 mb-3 px-4 md:px-8"
            >
              <h1 className="text-2xl md:text-3xl  font-bold text-sky-500">
                Necklace/Earrings
              </h1>
              <p>
                Versatility is at the core of our philosophy. Find your
                inspiration with our line of high-fashion earrings, from gold to
                silver to pearl, from classic hoops to crystal studs.
              </p>
              {/* button */}
              <Button className="w-full">Show Now</Button>
            </motion.div>
          </div>
        </Link>

        {/* card 2*/}

        <Link href={"./pages/blog_pages/blog_2"}>
          <div className="sm:max-w-md shadow-xl p-2 ">
            {/* Image div */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 1 }}
              className=" object-contain mb-5 flex justify-center items-center"
            >
              <Image
                className="rounded-lg"
                width={250}
                height={250}
                src={
                  "https://m.media-amazon.com/images/I/51odR0VioaL._AC_SX535_.jpg"
                }
                alt={""}
              ></Image>
            </motion.div>

            {/* content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 1.5, duration: 1.5 }}
              className="space-y-2 mb-3 px-4 md:px-8"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-sky-500">
                Women Necklace Earrings
              </h1>
              <p>
                Women Necklace Earrings Lovely Heart Crystal Pendant Necklace
                Chain Necklace Jewellery Set Love Gift Red Portable and Useful
                If you have any problems about our product.
              </p>
              {/* button */}
              <Button className="w-full">Show Now</Button>
            </motion.div>
          </div>
        </Link>

        {/* card 3*/}

        <Link href={"./pages/blog_pages/blog_3"}>
          <div className="sm:max-w-md shadow-xl p-2 ">
            {/* Image div */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 1 }}
              className=" object-contain mb-5 flex justify-center items-center"
            >
              <Image
                className="rounded-lg"
                width={100}
                height={100}
                src={
                  "https://m.media-amazon.com/images/I/61AdB4rKSvL._AC_SY695_.jpg"
                }
                alt={""}
              ></Image>
            </motion.div>

            {/* content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 1.5, duration: 1.5 }}
              className="space-y-2 mb-3 px-4 md:px-8"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-sky-500">
                Twist Pendant Necklace
              </h1>
              <p>
                The Amazon Essentials 10K Diamond Twist Pendant Necklace
                features a stunning 1/4 cttw diamond set in a 10K gold twist
                design.....
              </p>
              {/* button */}
              <Button className="w-full">Show Now</Button>
            </motion.div>
          </div>
        </Link>

        {/* card 4*/}

        <Link href={"./pages/blog_pages/blog_4"}>
          <div className="sm:max-w-md shadow-xl p-2 ">
            {/* Image div */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" object-contain mb-5 flex justify-center items-center"
            >
              <Image
                className="rounded-lg"
                width={300}
                height={300}
                src={
                  "https://m.media-amazon.com/images/I/41PkcaziZgL._AC_SY535_.jpg"
                }
                alt={""}
              ></Image>
            </motion.div>

            {/* content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 mb-3 px-4 md:px-8"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-sky-500">
                Jewellery Set Ring
              </h1>
              <p>
                Earrings Studs and Pendant Necklace for Women Durable
                processing.
              </p>
              {/* button */}
              <Button className="w-full">Show Now</Button>
            </motion.div>
          </div>
        </Link>

        {/* card 5*/}

        <Link href={"./pages/blog_pages/blog_5"}>
          <div className="sm:max-w-md shadow-xl p-2 ">
            {/* Image div */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" object-contain mb-5 flex justify-center items-center"
            >
              <Image
                className="rounded-lg"
                width={250}
                height={250}
                src={
                  "https://m.media-amazon.com/images/I/71MHp7eqbwL._AC_SY695_.jpg"
                }
                alt={""}
              ></Image>
            </motion.div>

            {/* content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 mb-3 px-4 md:px-8"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-sky-500">
              Jewels Gold Plated
              </h1>
              <p>
              Pearl Choker Necklace Earring & Maang Tikka Ethnic Jewellery Set for Women.
              </p>
              {/* button */}
              <Button className="w-full">Show Now</Button>
            </motion.div>
          </div>
        </Link>

        {/* card 6*/}

        <Link href={"./pages/blog_pages/blog_6"}>
          <div className="sm:max-w-md shadow-xl p-2 ">
            {/* Image div */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className=" object-contain mb-5 flex justify-center items-center"
            >
              <Image
                className="rounded-lg"
                width={250}
                height={250}
                src={
                  "https://m.media-amazon.com/images/I/61hLDHrQkTL._AC_SX535_.jpg"
                }
                alt={""}
              ></Image>
            </motion.div>

            {/* content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2 mb-3 px-4 md:px-8"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-sky-500">
              Woman Necklace Earrings
              </h1>
              <p>
              Jewelry Decor Necklace + Earrings +Two-Piece Suit Elegant Women Jewellery Convenient and cleverb
              </p>
              {/* button */}
              <Button className="w-full">Show Now</Button>
            </motion.div>
          </div>
        </Link>
      </div>
    </main>
  );
}
