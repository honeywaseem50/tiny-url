import { useEffect, useState } from "react";

const LoadingScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        onFinish();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        overflow-hidden
        flex items-center justify-center
        bg-gradient-to-b
        from-[#003452]
        via-[#075b78]
        to-[#08a5bd]
        transition-opacity duration-500
      "
    >

      {/* TOP LEFT SHAPE */}
      <div
        className="
          absolute
          -top-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#2d7591]
          opacity-25
        "
      />

      {/* LARGE BACKGROUND CURVE */}
      <div
        className="
          absolute
          top-[25%]
          left-[38%]
          w-[650px]
          h-[700px]
          rounded-full
          border-[110px]
          border-[#0a6885]
          opacity-40
        "
      />

      {/* RIGHT BIG BLOB */}
      <div
        className="
          absolute
          top-[47%]
          left-[48%]
          w-[700px]
          h-[400px]
          rounded-[45%]
          rotate-[42deg]
          bg-[#4ba0b5]
          opacity-40
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center">

        {/* LOGO */}
        <h1
          className="
            text-white
            text-4xl
            sm:text-5xl
            font-black
            tracking-[3px]
            select-none
          "
        >
          TINYURL
        </h1>

        {/* LOADER */}
        <div className="relative w-24 h-24 mt-8">

          {/* LEFT ARC */}
          <div
            className="
              absolute
              w-12
              h-12
              rounded-full
              border-t-[5px]
              border-l-[5px]
              border-white
              animate-spin
            "
            style={{
              animationDuration: "1.4s",
            }}
          />

          {/* RIGHT ARC */}
          <div
            className="
              absolute
              right-0
              bottom-0
              w-12
              h-12
              rounded-full
              border-r-[5px]
              border-b-[5px]
              border-white
              animate-spin
            "
            style={{
              animationDuration: "1.4s",
              animationDirection: "reverse",
            }}
          />

        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;