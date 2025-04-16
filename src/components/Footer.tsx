
import { HeartIcon, GithubIcon, TwitterIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            Made with <HeartIcon className="h-4 w-4 text-red-500" /> by AI Image Studio
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} AI Image Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
