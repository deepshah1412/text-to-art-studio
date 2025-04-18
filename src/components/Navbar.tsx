import { ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="border-b shadow-sm" style={{ background: "#1f2937" }}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl text-gray-100">GenDeep Studio</span>
        </div>
        <div className="flex gap-8">
          <Link
            to="/"
            className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Home
          </Link>
          <a
            href="#demo"
            className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            How It Works
          </a>
          <a
            href="#generateSection"
            className="text-sm text-gray-300 hover:text-green-400 transition-colors duration-200"
          >
            Generate
          </a>
        </div>
      </div>
    </nav>
  );
};
