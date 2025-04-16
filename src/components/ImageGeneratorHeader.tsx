
import { Paintbrush } from "lucide-react";

export const ImageGeneratorHeader = () => {
  return (
    <div className="flex items-center justify-center w-full mb-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Paintbrush className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">AI Image Generator</h1>
        </div>
        <p className="text-muted-foreground">Transform your ideas into stunning visuals with AI</p>
      </div>
    </div>
  );
};
