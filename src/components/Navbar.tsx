
import { ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">AI Image Studio</span>
        </div>
        <div className="flex gap-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground">
            How It Works
          </a>
          <a href="#generate" className="text-sm text-muted-foreground hover:text-foreground">
            Generate
          </a>
        </div>
      </div>
    </nav>
  );
};
