import { Card } from "@/components/ui/card";
import { Loader2, Download } from "lucide-react";

interface ImageDisplayProps {
  imageUrl?: string;
  isLoading: boolean;
}

export const ImageDisplay = ({ imageUrl, isLoading }: ImageDisplayProps) => {
  const handleDownload = () => {
    if (!imageUrl) return;
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "generated-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-4">
      <Card className="w-full aspect-square flex items-center justify-center overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-green-400" />
            <p className="text-gray-500">Creating your masterpiece...</p>
          </div>
        ) : imageUrl ? (
          <img  
            src={imageUrl}
            alt="Generated image"
            className="w-90 h-90 object-cover"
          />
        ) : (
          <p className="text-gray-500">Your generated image will appear here</p>
        )}
      </Card>
      {imageUrl && !isLoading && (
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-green-400 text-white font-semibold rounded-md hover:bg-green-500 transition-colors duration-200"
        >
          <Download className="mr-2 h-4 w-4" />
          Download Image
        </button>
      )}
    </div>
  );
};
