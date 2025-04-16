
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { GenerationType } from "./TypeSelector";

interface StyleSelectorProps {
  type: GenerationType;
  selectedStyle: string;
  onStyleSelect: (style: string) => void;
}

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
              className={`p-4 cursor-pointer shrink-0 transition-all hover:scale-105 ${
                selectedStyle === style
                  ? "border-primary bg-primary/5"
                  : "hover:border-primary/50"
              }`}
              onClick={() => onStyleSelect(style)}
            >
              <span className="font-medium">{style}</span>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
