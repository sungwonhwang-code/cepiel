type Props = {
  letters?: string;
  size?: number;
};

/**
 * Square monogram badge — used as a profile placeholder until a real
 * portrait is wired up.
 */
export function Monogram({ letters = "SH", size = 96 }: Props) {
  return (
    <div
      style={{ width: size, height: size }}
      className="relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-subtle bg-subtle"
    >
      <div className="absolute inset-0 dot-grid mask-fade opacity-60" />
      <span className="relative font-serif text-3xl font-medium tracking-tight">
        {letters}
      </span>
      <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
    </div>
  );
}
