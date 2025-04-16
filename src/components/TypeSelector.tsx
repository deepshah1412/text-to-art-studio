
import { ImageIcon, Layers, FileVector } from "lucide-react";
import { Card } from "@/components/ui/card";

export type GenerationType = "image" | "clipart" | "vector";

interface TypeSelectorProps {
  selectedType: GenerationType;
  onTypeSelect: (type: GenerationType) => void;
}

export const TypeSelector = ({ selectedType, onTypeSelect }: TypeSelectorProps) => {
  const types = [
    {
      id: "image",
      name: "Image",
      icon: ImageIcon,
      description: "Realistic photo-like images",
    },
    {
      id: "clipart",
      name: "Clipart",
      icon: Layers,
      description: "Stylized clipart illustrations",
    },
    {
      id: "vector",
      name: "Vector",
      icon: FileVector,
      description: "Clean vector graphics",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {types.map((type) => {
        const Icon = type.icon;
        return (
          <Card
            key={type.id}
            className={`p-4 cursor-pointer transition-all hover:scale-105 ${
              selectedType === type.id
                ? "border-primary bg-primary/5"
                : "hover:border-primary/50"
            }`}
            onClick={() => onTypeSelect(type.id as GenerationType)}
          >
            <div className="flex flex-col items-center text-center gap-2">
              <Icon className="w-8 h-8" />
              <h3 className="font-semibold">{type.name}</h3>
              <p className="text-sm text-muted-foreground">{type.description}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
