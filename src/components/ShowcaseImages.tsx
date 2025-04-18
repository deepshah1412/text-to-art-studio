import { Card } from "@/components/ui/card";

const showcaseImages = [
  "src/images/showcase/image1.png",
  "src/images/showcase/image2.png",
  "src/images/showcase/image3.png",
  "src/images/showcase/image4.png",
  "src/images/showcase/image5.png",
  "src/images/showcase/image6.png",
  "src/images/showcase/image8.png",
  "src/images/showcase/image7.png",
];

export const ShowcaseImages = () => {
  return (
    <div className="my-12">
      <h2 className="text-2xl font-semibold mb-6 text-center">Images Generated using GenDeep Studio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {showcaseImages.map((src, index) => (
          <Card key={index} className="overflow-hidden rounded-xl">
            <img src={src} alt={`Showcase ${index + 1}`} className="w-full h-full object-cover" />
          </Card>
        ))}
      </div>
    </div>
  );
};
