import Navber from "./Navber";

export default function PageHero({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bg-grid relative overflow-hidden ${className}`}>
      <Navber />
      {children}
    </section>
  );
}
