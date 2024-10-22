import PhysicsSimulation from "@/components/custom_ui/physicsSchene/PhysicsSimulation";

export default function ToolSet() {
  return (
    <section className="my-16">
      <div className="rounded-3xl bg-[#303030]">
        <h1 className="uppercase pt-16 font-kanit font-bold text-3xl md:text-5xl lg:text-6xl text-center">
          Tool Set
        </h1>
        <h2 className="pt-7 text-[#A5A0A5] font-bold text-xl md:text-2xl lg:text-3xl text-center tracking-wider">
          Explore the technologies and tools I use to craft exceptional digital
          experiences.
        </h2>
        <div className="h-[24rem] md:h-[34rem] lg:h-[38rem]">
          <PhysicsSimulation />
        </div>
      </div>
    </section>
  );
}
