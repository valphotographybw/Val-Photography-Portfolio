import { motion } from "framer-motion";
import { serviceGalleries } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Selected moments</p>
      <h2 className={styles.sectionHeadText}>Photography galleries</h2>
    </motion.div>
    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-5 max-w-3xl text-[17px] leading-8 text-secondary"
    >
      Explore the kind of moments Val Photography loves to capture. Each service
      has its own gallery — get in touch to plan a shoot in Botswana.
    </motion.p>

    <div className="mt-14 space-y-20">
      {serviceGalleries.map((gallery, galleryIndex) => (
        <section key={gallery.id} id={gallery.id} className="scroll-mt-28">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                0{galleryIndex + 1} / Photography
              </p>
              <h3 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                {gallery.title}
              </h3>
            </div>
            <p className="max-w-xl leading-7 text-secondary">{gallery.description}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.photos.map((photo, photoIndex) => (
              <motion.a
                key={`${gallery.id}-${photoIndex}`}
                href={photo.src}
                target="_blank"
                rel="noreferrer"
                variants={fadeIn("up", "spring", photoIndex * 0.08, 0.5)}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-white/5"
                aria-label={`Open full-size photo: ${photo.alt}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 text-sm font-medium text-white">
                  {gallery.title} · 0{photoIndex + 1}
                </span>
              </motion.a>
            ))}
          </div>
        </section>
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, "gallery");
