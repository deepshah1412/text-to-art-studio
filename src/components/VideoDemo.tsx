
import { Card } from "./ui/card";
import { Play } from "lucide-react";

export const VideoDemo = () => {
  return (
    <div id="demo" className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
      {/*<Card className="aspect-video relative flex items-center justify-center bg-muted">
         Replace with actual video player or embed 
        <div className="text-center space-y-4">
          <Play className="w-12 h-12 mx-auto text-primary" />
          <p className="text-muted-foreground">Video demonstration coming soon</p>
        </div>
      </Card>*/}
      <Card className="aspect-video relative flex items-center justify-center bg-muted">        
        <video controls className="w-full h-full object-cover">
          <source src="public/Intro_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Card>
    </div>
  );
};
