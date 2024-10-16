import SiteTechStack from "@/components/custom_ui/SiteTechStack";

export default function SiteInfo() {
  return (
    <section>
      <div className="rounded-3xl bg-[#303030] pb-14">
        <h1 className="uppercase pt-12 pb-14 font-kanit font-bold text-6xl text-center">
          tech i used for this site
        </h1>
        <SiteTechStack />
      </div>
    </section>
  );
}
