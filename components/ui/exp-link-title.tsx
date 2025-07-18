"use client";

export default function ExpLinkTitle({
  title,
  link,
}: {
  title: string;
  link?: string;
}) {
  return (
    <button
      onClick={() => link && window.open(link, "_blank")}
      className="flex items-center gap-2 font-semibold font-racing-sans-one"
    >
      {title}
    </button>
  );
}
