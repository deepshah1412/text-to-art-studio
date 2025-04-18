import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ImageGeneratorHeader } from "@/components/ImageGeneratorHeader";
import { GenerateImageSectionHeader } from "@/components/TypeHeader";
import { VideoDemo } from "@/components/VideoDemo";
import { TypeSelector, type GenerationType } from "@/components/TypeSelector";
import { StyleSelector } from "@/components/StyleSelector";
import { PromptInput } from "@/components/PromptInput";
import { ImageDisplay } from "@/components/ImageDisplay";
import { toast } from "sonner";
import { Footer } from "@/components/Footer";
import { ShowcaseImages } from "@/components/ShowcaseImages";
import { FAQ } from "@/components/FAQ";
const Index = () => {
  const [selectedType, setSelectedType] = useState<GenerationType>("image");
  const [selectedStyle, setSelectedStyle] = useState<string>("");
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string>();

  const handleGenerate = async () => {
    if (!selectedStyle) {
      toast.error("Please select a style first");
      return;
    }
    if (!prompt) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/generate-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'x-api-key': 'Q_2wS29Dz6trJ0WemEfa4iG4gDtgN0S5JodGBytdPIo'
        },
        body: JSON.stringify({
          prompt,
          type: selectedStyle,
        }),
      });
  
      if (!response.ok) {
        throw new Error("API request failed");
      }
  
      const data = await response.json();
      const base64Image = data[0];
      setGeneratedImage(base64Image); // Adjust based on your API response structure
      toast.success("Image generated successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      toast.error("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <ImageGeneratorHeader />
          <VideoDemo />
          <ShowcaseImages />
            <GenerateImageSectionHeader/>
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
      <FAQ/>
      <Footer />
    </div>
  );
};

export default Index;
