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
              src="https://m.media-amazon.com/images/I/71SKoL4emSL._AC_SY535_.jpg"
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
              Pearl Choker Necklace
            </h1>
            <p>
              This jewellery set is crafted in gold plating and consists of a
              necklace, and a pair of earrings. This necklace set with a saree
              or a salwar suit to enhance the look. This jewelry set is a great
              option and a perfect pick for your wedding functions. Be assured
              to find a variety of contemporary and traditional designs in the
              mesmerising collection that we offer.
            </p>
          </motion.div>
        </div>

        <div className="text-left p-4 md:p-8 space-y-5 mt-8 bg-sky-400 text-white">
          <h1 className="md:text-3xl text-2xl font-semibold">
            About this product
          </h1>
          <ul>
            <li>
            Dimensions : Necklace Length - 11.5 CM x Width - 6 CM, Earring Height - 5.5 CMx Width - 3 CM,Maang Tikka L - 14.5 CM x W -3 CM
            </li>
            <li>
            QUALITY - These beautiful jewellery set are handcrafted in alloy with good quality. It is secured with a drawstring closures.
            </li>
            <li>
            GIFTING IDEA - Ideal Valentine, Birthday, Anniversary gift for someone you LOVE. With our packaging Box, you do not need to opt-in for any additional gift packaging. The product comes in a beautiful Elegant Ready-to-Gift Box.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
