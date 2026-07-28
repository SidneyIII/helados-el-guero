type PlaceholderImageProps = {
  label: string;
  className?: string;
};

export default function PlaceholderImage({ label, className = "" }: PlaceholderImageProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-espresso/40 bg-cream text-center ${className}`}
    >
      <span className="px-4 font-body text-sm text-espresso/60">{`[Photo: ${label}]`}</span>
    </div>
  );
}
