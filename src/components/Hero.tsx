import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { ChevronRight, Coffee, Star } from "lucide-react";
import WinterCollection from './WinterCollection';
import ChristmasExclusives from './ChristmasExclusives';
import FeaturedDrinks from './FeaturedDrinks';
import Rewards from "./Rewards";

export default function Hero() {
  return (
    <>
      <div className="relative h-[600px] flex items-center bg-[#1E3932] text-white overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        >
          <img
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
            alt="Coffee shop atmosphere"
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-8"> {/* Increased margin-bottom */}
              <Coffee className="h-6 w-6 text-white opacity-80" /> {/* Adjusted color */}
              <span className="text-sm font-semibold uppercase tracking-wider text-white opacity-90">New Summer Collection</span>
            </div>

            <h1 className="text-5xl font-extrabold tracking-tight mb-8 leading-tight text-white shadow-lg"> {/* Increased font weight and added shadow */}
              Discover Your Perfect Summer Refreshment
            </h1>

            <p className="text-2xl mb-10 opacity-90 text-white"> {/* Increased font size */}
              Handcrafted drinks made with premium ingredients, perfect for those sunny days.
            </p>

            <div className="flex gap-8"> {/* Increased gap between buttons */}
              <Button className="bg-white text-green-800 hover:bg-gray-100 text-lg group py-3 px-8 font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"> {/* Increased padding, added shadow, hover effect */}
                Order now
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button className="bg-white text-green-800 hover:bg-gray-100 text-lg group py-3 px-8 font-semibold shadow-lg transform transition-all duration-300 hover:scale-105"> {/* Increased padding, added shadow, hover effect */}
                <Star className="mr-2 h-5 w-5" />
                Get Rewards
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <WinterCollection />
      <ChristmasExclusives />
      <FeaturedDrinks />
      <Rewards />
    </>
  );
}