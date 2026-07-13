import { user } from '@/constants/data'

export default function SiteFooter() {
  return (
    <footer className="border-border flex items-baseline justify-between border-t py-10">
      <p className="font-geist-mono text-muted-foreground/70 text-[11px] tracking-widest uppercase">
        © {new Date().getFullYear()} {user.name}
      </p>
      <p className="display text-muted-foreground text-sm italic">
        Made with care, shipped with CI.
      </p>
    </footer>
  )
}
