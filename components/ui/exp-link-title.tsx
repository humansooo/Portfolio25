"use client";

export default function ExpLinkTitle({
  title,
  link,
}: {
  title: string;
  link?: string;
}) {
  return (
    <div
      role="button"
      onClick={() => link && window.open(link, "_blank")}
      className="flex items-center gap-2 font-semibold"
    >
      {title}
    </div>
  );
}
