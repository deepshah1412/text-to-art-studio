
import { Paintbrush } from "lucide-react";

export const GenerateImageSectionHeader = () => {
  return (
    <div id="generateSection" className="flex items-center justify-center w-full mb-10">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Paintbrush className="w-8 h-8 text-green-400" />
          <p className="text-2xl font-bold text-gray-800">Generate Image Here</p>
        </div>
        <div className="space-y-2">
          <span className="text-sm text-gray-500 " style={{ marginRight: "20px" }}>1. Select Type and Style</span>
          <span className="text-sm text-gray-500 " style={{ marginRight: "20px" }}>2. Write a Prompt</span>
          <span className="text-sm text-gray-500 " style={{ marginRight: "20px" }}>3. Hit Generate Button</span>
        </div>
      </div>
    </div>
  );
};

