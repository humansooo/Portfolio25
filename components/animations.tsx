export const EasterEgg = (props: { rotate?: number }) => {
  return (
    <div
      className="font-bytesized text-foreground pointer-events-none absolute z-0 text-[100px] opacity-[0] dark:opacity-[0.2]"
      style={{
        top: '50%',
        left: '50%',
        filter: 'blur(14px)',
        rotate: `${props.rotate ? props.rotate : 0}deg`,
        scale: 10,
      }}
    >
      (*)
    </div>
  )
}
