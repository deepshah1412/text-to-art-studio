
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { GenerationType } from "./TypeSelector";

interface StyleSelectorProps {
  type: GenerationType;
  selectedStyle: string;
  onStyleSelect: (style: string) => void;
}

const getStyleImage = (styleValue: string) => {
  const baseStyles: Record<string, string> = {
    realistic: "src/images/style/Realistic.png",
    image_anime: "src/images/style/image_anime.png",
    image_comic: "src/images/style/Comic book.png",
    image_oil_painting: "src/images/style/Oil painting.png",
    image_scifi : "src/images/style/Sci-fi.png",
    image_sketch: "src/images/style/Sketch.png",
    watercolor_images : "src/images/style/Watercolor.png",
    shirt_graphic: "src/images/style/T-shirt graphic.png",
    clipart_3d : "src/images/style/3D.png",
    clipart_baby: "src/images/style/Baby.png",
    retro_cartoon : "src/images/style/Retro Cartoon.png",
    vector_silhouette : "src/images/style/Silhouette.png",
    vector_anime: "src/images/style/Anime.png",
    vector_emblem: "src/images/style/Emblem.png",
    vector_drawing: "src/images/style/Detailed Drawing.png",
    vector_cartoon: "src/images/style/cartoon.png",
    vector_line_art: "src/images/style/line_art.png",
  };

  return baseStyles[styleValue] || "https://source.unsplash.com/featured/?art";
};

export const StyleSelector = ({ type, selectedStyle, onStyleSelect }: StyleSelectorProps) => {
  const styles = {
    image: [
      { label: "Realistic", value: "realistic" },
      { label: "Anime", value: "image_anime" },
      { label: "Comic Book", value: "image_comic" },
      { label: "Oil Painting", value: "image_oil_painting" },
      { label: "Sci-Fi", value: "image_scifi" },
      { label: "Sketch", value: "image_sketch" },
    ],
    clipart: [
      { label: "Watercolor", value: "watercolor_images" },
      { label: "T-shirt Graphic", value: "shirt_graphic" },
      { label: "3D", value: "clipart_3d" },
      { label: "Baby", value: "clipart_baby" },
      { label: "Retro Cartoon", value: "retro_cartoon" },
    ],
    vector: [
      { label: "Silhouette", value: "vector_silhouette" },
      { label: "Drawing", value: "vector_drawing" },
      { label: "Line Art", value: "vector_line_art" },
      { label: "Cartoon", value: "vector_cartoon" },
      { label: "Emblem", value: "vector_emblem" },
      { label: "Anime", value: "vector_anime" },
    ],
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Select Style</h3>
      <ScrollArea className="w-full max-w-full whitespace-nowrap overflow-x-auto rounded-md border">
        <div className="flex p-4 gap-4 w-max">
          {styles[type].map(({ label, value }) => (
            <Card
              key={value}
              className={`cursor-pointer shrink-0 transition-all hover:scale-105 ${
                selectedStyle === value
                  ? "border-primary bg-primary/5"
                  : "hover:border-primary/50"
              }`}
              onClick={() => onStyleSelect(value)}
            >
              <div className="w-32 space-y-2">
                <div className="aspect-square rounded-t-md overflow-hidden">
                  <img
                    src={getStyleImage(value)}
                    alt={label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-center pb-2">{label}</p>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
