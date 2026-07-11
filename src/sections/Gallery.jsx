import Reveal from "../components/Reveal";
import { galleryImages } from "../data/restaurant";

export default function Gallery() {
  return (
    <section id="galerie" className="bg-sand-50 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow section-label text-terracotta-600">Ambiente</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-olive-900 sm:text-5xl">
            Ein Ort zum Ankommen
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 sm:[grid-auto-flow:dense]">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 100}
              className={img.tall ? "row-span-2" : ""}
            >
              <div
                className={`overflow-hidden rounded-xl ${
                  img.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
