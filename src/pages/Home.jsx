import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { Card, CardContent } from "@/components/ui/card";
const Home = () => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const endTime = 26;

  const handleProgress = (state) => {
    if (state.playedSeconds >= endTime) {
      setPlaying(false);
      playerRef.current.seekTo(endTime, "seconds");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 p-6 relative overflow-hidden">
      <img src="/public/logo.png" alt="logo" />
      <Card className="max-w-2xl w-full shadow-lg border border-black rounded-2xl bg-white z-10">
        <CardContent className="p-6 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">
            Your daily dose of forescast
          </h2>
          <div className="rounded-lg overflow-hidden border border-black shadow-md">
            <ReactPlayer
              className="mx-auto"
              ref={playerRef}
              url="https://www.youtube.com/watch?v=IR-Kf6QagMc"
              playing={playing}
              onProgress={handleProgress}
              width="100%"
              height="360px"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;