"use client";

export default function GrainAnimation() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[999999999] opacity-[0.07] dark:opacity-[0.05] dark:bg-blend-multiply"
        style={{
          backgroundImage:
            'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")',
          height: "300%",
          width: "300%",
          top: 0,
          left: 0,
          animation: "animate-grain 8s steps(10) infinite",
        }}
      />
      <style jsx global>{`
        @keyframes animate-grain {
          0%,
          100% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -10%);
          }
          20% {
            transform: translate(-15%, -20%);
          }
          30% {
            transform: translate(-5%, -10%);
          }
          40% {
            transform: translate(-15%, -20%);
          }
          50% {
            transform: translate(-5%, -10%);
          }
          60% {
            transform: translate(-15%, -20%);
          }
          70% {
            transform: translate(-5%, -10%);
          }
          80% {
            transform: translate(-15%, -20%);
          }
          90% {
            transform: translate(-5%, -10%);
          }
          100% {
            transform: translate(-15%, -20%);
          }
        }
        .grain-animate {
          animation: animate-grain 8s steps(10) infinite;
        }
      `}</style>
    </>
  );
}
