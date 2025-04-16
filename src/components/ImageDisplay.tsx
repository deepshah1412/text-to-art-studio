
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface ImageDisplayProps {
  imageUrl?: string;
  isLoading: boolean;
}

export const ImageDisplay = ({ imageUrl, isLoading }: ImageDisplayProps) => {
  return (
    <Card className="w-full aspect-square flex items-center justify-center overflow-hidden">
      {isLoading ? (
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-8 w-8 animate-spin" />
          <p className="text-muted-foreground">Creating your masterpiece...</p>
        </div>
      ) : imageUrl ? (
        <img
          src={imageUrl}
          alt="Generated image"
          className="w-full h-full object-cover"
        />
      ) : (
        <p className="text-muted-foreground">Your generated image will appear here</p>
      )}
    </Card>
  );
};
