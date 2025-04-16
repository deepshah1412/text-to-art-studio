
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ImageGeneratorHeader } from "@/components/ImageGeneratorHeader";
import { VideoDemo } from "@/components/VideoDemo";
import { TypeSelector, type GenerationType } from "@/components/TypeSelector";
import { StyleSelector } from "@/components/StyleSelector";
import { PromptInput } from "@/components/PromptInput";
import { ImageDisplay } from "@/components/ImageDisplay";
import { toast } from "sonner";

const Index = () => {
  const [selectedType, setSelectedType] = useState<GenerationType>("image");
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string>();

  const handleGenerate = () => {
    if (!selectedStyle) {
      toast.error("Please select a style first");
      return;
    }
    if (!prompt) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    // Simulate image generation - replace with actual API call
    setTimeout(() => {
      setGeneratedImage("https://source.unsplash.com/random");
      setIsGenerating(false);
      toast.success("Image generated successfully!");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <ImageGeneratorHeader />
          <VideoDemo />
          
          <div id="generate" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <TypeSelector
                selectedType={selectedType}
                onTypeSelect={setSelectedType}
              />
              <StyleSelector
                type={selectedType}
                selectedStyle={selectedStyle}
                onStyleSelect={setSelectedStyle}
              />
              <PromptInput
                prompt={prompt}
                onPromptChange={setPrompt}
                onGenerate={handleGenerate}
                isGenerating={isGenerating}
              />
            </div>
            
            <div>
              <ImageDisplay
                imageUrl={generatedImage}
                isLoading={isGenerating}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
