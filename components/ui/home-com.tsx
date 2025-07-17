"use client";

export default function HomeCom() {
  return (
    <div className="flex flex-row mt-10 gap-4 items-center">
      <button
        onClick={() => {
          window.open("mailto:himanshuforpro@gmail.com", "_blank");
        }}
        className="bg-foreground/10 text-sm font-black font-geist-mono rounded-xl p-2 sodo shadow-[inset_5px_5px_5px_currentColor] shadow-foreground/20 transition-all duration-700   hover:shadow-[inset_2px_2px_2px_#669] hover:bg-foreground/20"
      >
        Mail me
      </button>
      {/* <h1 className="text-sm font-black text-wrap text-foreground ">
        I'm looking for a new challenge
      </h1> */}
    </div>
  );
}
