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
          Anniversary Jewellery
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* image div starts here */}
          <motion.div
            // whileHover={{scale:1.1}}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex"
          >
            <Image
              className="rounded-2xl shadow-lg hover:opacity-90"
              src="https://m.media-amazon.com/images/I/41PkcaziZgL._AC_SY535_.jpg"
              width={300}
              height={300}
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
            Earrings Studs and Pendant Necklace
            </h1>
            <p>
            Nice accessories to integrate jewelry case for girls and collectors
Said to behold mystical powers, Opal is beautiful and rich with enigmatic meaning.
            </p>
          </motion.div>
        </div>

        <div className="text-left p-4 md:p-8 space-y-5 mt-8 bg-sky-400 text-white">
          <h1 className="md:text-3xl text-2xl font-semibold">
            About this product
          </h1>
          <ul>
            <li>
            New special design,Show your infinite charm and unique style.
            </li>
            <li>We respect and cherish each customer, if you have any questions whether before or after ordering, please feel free to contact us, we make every reasonable effort to supply service that satisfy your requirements.</li>
            <li>Nice accessories to integrate jewelry case for girls and collectors</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
