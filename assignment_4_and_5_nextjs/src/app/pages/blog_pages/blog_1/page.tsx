"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main>
      <div className="mx-4 md:mx-24">
        <div className="space-y-2 mb-5">
          <h1>Home link</h1>
          <h1 className="md:text-3xl text-2xl font-semibold">Necklace/Pierced Earrings Set</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* image div starts here */}
          <motion.div
            // whileHover={{scale:1.1}}
            initial={{ opacity: 0, x:-50 }}
            animate={{ opacity: 1, x:0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className=""
          >
            <Image
              className="rounded-2xl shadow-lg hover:opacity-90"
              src="https://m.media-amazon.com/images/I/61J8i5pJi6L._AC_SY695_.jpg"
              width={350}
              height={350}
              alt="Grey Heron"
            />
          </motion.div>
          {/* image div ends here */}

          <motion.div
          initial={{ opacity: 0, x:50 }}
          animate={{ opacity: 1, x:0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          
          
          className="text-left space-y-2 p-4 md:p-20 mt-5 rounded-xl hover:text-sky-500 hover:bg-white bg-sky-500 text-white border-sky-500 border shadow-xl">
            <h1 className="text-2xl md:text-3xl font-bold">Women's Boxed Necklace/Pierced Earrings Set, Silver/Blue</h1>
          <p>
          A cult favorite of fashion insiders, Nine West is the ultimate destination for coveted shoes & accessories at the forefront of fashion.

          </p>
          <p>Nine West is always a modern and on trend brand. We are constantly evolving with the changing times.</p>
          </motion.div>
        </div>


             <div className="text-left p-4 md:p-8 space-y-5 mt-8 bg-sky-400 text-white">
              <h1 className="md:text-3xl text-2xl font-semibold">About this product</h1>
              <ul>
                <li>Necklace: L-16 in x W-0.4 in x H-0.8 in, Earrings: L-0.8 in x W-0.4 in x H-0.4 in</li>
                <li>Boxed Jewelry Set - Necklace and Earrings - Classics</li>
              </ul>
             </div>

      </div>








    </main>
  );
}
