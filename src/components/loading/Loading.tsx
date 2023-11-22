const Loading = () => {
  return (
    <div className="flex items-center justify-center h-[100dvh]">
      <div className="flex space-x-4">
        <div className="w-6 h-6 rounded-full bg-purple-500 animate-pulse-fast"></div>
        <div className="w-6 h-6 rounded-full bg-blue-500 animate-pulse-fast"></div>
        <div className="w-6 h-6 rounded-full bg-green-500 animate-pulse-fast"></div>
      </div>
    </div>
  );
};

export default Loading;
