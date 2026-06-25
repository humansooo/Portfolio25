export const EasterEgg = (props: {
  rotate?: number
  style?: React.CSSProperties
}) => {
  return (
    <div
      className="font-bytesized text-foreground pointer-events-none absolute z-0 text-[100px] opacity-0 blur-md dark:opacity-10"
      style={{
        top: '50%',
        left: '50%',
        rotate: `${props.rotate ? props.rotate : 0}deg`,
        scale: 10,
        ...(props.style || {}),
      }}
    >
      (*)
    </div>
  )
}
