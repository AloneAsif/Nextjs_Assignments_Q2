"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BlogPage() {
  return (
    <main>
      <div className="mx-4 md:mx-24">
        <div className="space-y-2 mb-5">
          {/* <h1>Home link</h1> */}
          <h1 className="md:text-3xl text-2xl font-semibold">Women Necklace Earrings</h1>
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
              src="https://m.media-amazon.com/images/I/51yixjOVlsL._AC_SX675_.jpg"
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
            <h1 className="text-2xl md:text-3xl font-bold">Chain Necklace Jewellery Set Love Gift Red Clever fashion</h1>
          <p>
          Women Necklace Earrings Lovely Heart Crystal Pendant Necklace Chain Necklace Jewellery Set Love Gift Red Portable and Useful
          If you have any problems about our product.
          </p>
       
          </motion.div>
        </div>


             <div className="text-left p-4 md:p-8 space-y-5 mt-8 bg-sky-400 text-white">
              <h1 className="md:text-3xl text-2xl font-semibold">About this product</h1>
              <ul>
                <li>Suitable for personal wearing or ideal gift for friends,coworkers or family</li>
                <li>It brings an elegant and graceful look to any special occasion</li>
                <li>Material:alloy</li>
              </ul>
             </div>

      </div>








    </main>
  );
}
