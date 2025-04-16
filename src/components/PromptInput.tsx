
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";

interface PromptInputProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export const PromptInput = ({
  prompt,
  onPromptChange,
  onGenerate,
  isGenerating,
}: PromptInputProps) => {
  return (
    <div className="space-y-4 mb-8">
      <Textarea
        placeholder="Describe the image you want to generate..."
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        className="min-h-[100px]"
      />
      <Button
        className="w-full sm:w-auto"
        onClick={onGenerate}
        disabled={!prompt || isGenerating}
      >
        <Wand2 className="mr-2 h-4 w-4" />
        {isGenerating ? "Generating..." : "Generate"}
      </Button>
    </div>
  );
};
