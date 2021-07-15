import React, { useState } from "react";
import Header from "./components/Header";
import InputURL from "./components/InputURL";
import Thumbnail from "./components/Thumbnail";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const handleSubmit: React.FormEventHandler = e => {
    e.preventDefault();
    const idRegex =
      /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    if (!videoUrl.match(idRegex)) return;
    const videoId = videoUrl.match(idRegex)![1];
    setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`);
  };
  return (
    <div>
      <Header />
      <main className="container mx-auto mt-8">
        <InputURL
          videoUrl={videoUrl}
          setVideoUrl={setVideoUrl}
          handleSubmit={handleSubmit}
        />
        <Thumbnail thumbnailUrl={thumbnailUrl} />
      </main>
    </div>
  );
}

export default App;
