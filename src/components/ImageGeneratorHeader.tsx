
import { Paintbrush } from "lucide-react";

export const ImageGeneratorHeader = () => {
  return (
    <div className="flex items-center justify-center w-full mb-12">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Paintbrush className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">AI Image Generator</h1>
        </div>
        <div className="space-y-2">
          <p className="text-xl text-muted-foreground">Transform your ideas into stunning visuals with AI</p>
          <p className="text-sm text-muted-foreground">Choose from different generation types and styles to create the perfect image</p>
        </div>
      </div>
    </div>
  );
};
