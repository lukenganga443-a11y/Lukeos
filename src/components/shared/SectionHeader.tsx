type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold tracking-tight text-white">{title}</h1>

      {subtitle && <p className="mt-2 text-zinc-400">{subtitle}</p>}
    </div>
  );
}
