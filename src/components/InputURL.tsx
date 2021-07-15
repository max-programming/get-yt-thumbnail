import React from "react";
import { FiLink, FiX } from "react-icons/fi";

interface Props {
  videoUrl: string;
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: React.FormEventHandler;
}

const InputURL = ({ videoUrl, setVideoUrl, handleSubmit }: Props) => {
  return (
    <form className="relative flex" onSubmit={handleSubmit}>
      <FiLink className="absolute top-3 left-2 w-6 h-6" />
      <button
        type="button"
        className="absolute top-2 right-40 w-8 h-8 rounded hover:bg-gray-300"
      >
        <FiX className="ml-2" />
      </button>
      <input
        type="url"
        className="border-2 border-gray-600 outline-none focus:border-red-600 focus:rounded-2xl rounded-lg p-2 pl-10 text-xl w-full transition-all mr-2"
        placeholder="Enter Video URL here"
        value={videoUrl}
        onChange={e => setVideoUrl(e.target.value)}
      />
      <button className="bg-red-600 text-white text-xl w-40 rounded-2xl hover:rounded-lg transition-all active:bg-red-500">
        Get
      </button>
    </form>
  );
};

export default InputURL;
