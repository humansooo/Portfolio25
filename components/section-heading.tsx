export default function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="overline-label">
        {index} / {title}
      </span>
      <span className="bg-border h-px flex-1 self-center" aria-hidden="true" />
    </div>
  )
}
