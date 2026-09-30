import Navber from "../Navber";

export default function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden">
      <Navber />

      <div
        className="relative mx-auto max-w-[1440px] lg:aspect-[1440/1024]"
        style={{ fontSize: "clamp(8px,1vw,14.4px)" }}
      ></div>
    </section>
  );
}
