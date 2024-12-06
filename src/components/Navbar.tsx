import { useState } from "react";
import { Menu, X, Coffee, MapPin } from "lucide-react";
import { Button } from "./ui/button"; 
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center"> {/* Using Link here */}
              <Coffee className="h-8 w-8 text-green-700" />
              <span className="ml-2 text-xl font-semibold">Cafélicious</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link to="/menu" className="text-gray-700 hover:text-green-700 transition-colors px-3 py-2"> {/* Using Link here */}
                Menu
              </Link>
              <Link to="/rewards" className="text-gray-700 hover:text-green-700 transition-colors px-3 py-2"> {/* Using Link here */}
                Rewards
              </Link>
              <Link to="/gift-cards" className="text-gray-700 hover:text-green-700 transition-colors px-3 py-2"> {/* Using Link here */}
                Gift Cards
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Find a store
            </Button>
            <Button variant="outline">Sign in</Button>
            <Button className="bg-green-700 hover:bg-green-800 text-white">Join now</Button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/menu" className="block px-3 py-2 text-gray-700 hover:text-green-700"> {/* Using Link here */}
              Menu
            </Link>
            <Link to="/rewards" className="block px-3 py-2 text-gray-700 hover:text-green-700"> {/* Using Link here */}
              Rewards
            </Link>
            <Link to="/gift-cards" className="block px-3 py-2 text-gray-700 hover:text-green-700"> {/* Using Link here */}
              Gift Cards
            </Link>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">Sign in</Button>
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white">Join now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
