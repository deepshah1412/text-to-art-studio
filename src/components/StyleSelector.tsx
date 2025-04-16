
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { GenerationType } from "./TypeSelector";

interface StyleSelectorProps {
  type: GenerationType;
  selectedStyle: string;
  onStyleSelect: (style: string) => void;
}

const getStyleImage = (style: string) => {
  // Using placeholder images for each style
  const baseStyles: Record<string, string> = {
    "Photorealistic": "https://source.unsplash.com/featured/?photorealistic",
    "Cinematic": "https://source.unsplash.com/featured/?cinematic",
    "Portrait": "https://source.unsplash.com/featured/?portrait",
    "Landscape": "https://source.unsplash.com/featured/?landscape",
    "Abstract": "https://source.unsplash.com/featured/?abstract",
    "Film": "https://source.unsplash.com/featured/?film",
    "Vintage": "https://source.unsplash.com/featured/?vintage",
  };
  return baseStyles[style] || "https://source.unsplash.com/featured/?art";
};

export const StyleSelector = ({ type, selectedStyle, onStyleSelect }: StyleSelectorProps) => {
  const styles = {
    image: [
      "Photorealistic",
      "Cinematic",
      "Portrait",
      "Landscape",
      "Abstract",
      "Film",
      "Vintage",
    ],
    clipart: [
      "Cartoon",
      "Anime",
      "3D",
      "Flat",
      "Isometric",
      "Hand-drawn",
      "Pixel art",
    ],
    vector: [
      "Line art",
      "Geometric",
      "Minimalist",
      "Logo style",
      "Icon set",
      "Technical",
      "Decorative",
    ],
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Select Style</h3>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex p-4 gap-4">
          {styles[type].map((style) => (
            <Card
              key={style}
              className={`cursor-pointer shrink-0 transition-all hover:scale-105 ${
                selectedStyle === style
                  ? "border-primary bg-primary/5"
                  : "hover:border-primary/50"
              }`}
              onClick={() => onStyleSelect(style)}
            >
              <div className="w-32 space-y-2">
                <div className="aspect-square rounded-t-md overflow-hidden">
                  <img 
                    src={getStyleImage(style)} 
                    alt={style}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-center pb-2">{style}</p>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
