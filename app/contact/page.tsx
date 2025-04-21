import ContactForm from "./_components/ContactForm";

export default function Home() {
  return (
    <section className="px-1 md:px-3 lg:px-5">
      <div className="rounded-3xl h-48 md:h-72 lg:h-300 bg-[#7e8ada] flex items-center justify-center rounded-3xl">
        <span className="font-flex text-lg sm:text-xl md:text-2xl">
          Let&apos;s get in touch!
        </span>
      </div>
      <ContactForm />
    </section>
  );
}
