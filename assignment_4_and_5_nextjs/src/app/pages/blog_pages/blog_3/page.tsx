"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main>
      <div className="mx-4 md:mx-24">
        <div className="space-y-2 mb-5">
          {/* <h1>Home link</h1> */}
          <h1 className="md:text-3xl text-2xl font-semibold">
          Twist Pendant Necklace
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* image div starts here */}
          <motion.div
            // whileHover={{scale:1.1}}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center items-center"
          >
            <Image
              className="rounded-2xl shadow-lg hover:opacity-90"
              src="https://m.media-amazon.com/images/I/61AdB4rKSvL._AC_SY695_.jpg"
              width={150}
              height={150}
              alt="Grey Heron"
            />
          </motion.div>
          {/* image div ends here */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-left space-y-2 p-4 md:p-20 mt-5 rounded-xl hover:text-sky-500 hover:bg-white bg-sky-500 text-white border-sky-500 border shadow-xl"
          >
            <h1 className="text-2xl md:text-3xl font-bold">
            Amazon Essentials 10K Diamond
            </h1>
            <p>
            The Amazon Essentials 10K Diamond Twist Pendant Necklace
                features a stunning 1/4 cttw diamond set in a 10K gold twist
                design, offering an elegant and timeless accessory for any
                occasion. Ideal for adding a touch of sparkle to your everyday
                look or special events.
            </p>
          </motion.div>
        </div>

        <div className="text-left p-4 md:p-8 space-y-5 mt-8 bg-sky-400 text-white">
          <h1 className="md:text-3xl text-2xl font-semibold">
            About this product
          </h1>
          <ul>
            <li>
            This product was previously sold as Amazon Collection and now as Amazon Essentials.
            </li>
            <li><strong>STYLE:</strong> This beautiful 1/4 cttw 10K Yellow Gold Necklace features a diamond-accented twisted infinity pendant 10.88mm in width and 26.15mm in length with cluster of Diamonds suspended at center</li>
            <li><strong>DETAILS:</strong> 18" rolo chain with spring ring clasp</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
