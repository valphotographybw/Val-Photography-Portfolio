import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { serviceGalleries } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const getAdjacentPhoto = (current, direction) => {
  if (!current) return null;

  const gallery = serviceGalleries.find(
    (item) => item.id === current.galleryId
  );
  if (!gallery?.photos.length) return null;

  const photoIndex =
    (current.photoIndex + direction + gallery.photos.length) %
    gallery.photos.length;

  return { ...current, photoIndex };
};

const Works = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const triggerRef = useRef(null);
  const selectedGalleryId = selectedPhoto?.galleryId;
  const selectedGallery = selectedPhoto
    ? serviceGalleries.find((gallery) => gallery.id === selectedPhoto.galleryId)
    : null;
  const activePhoto = selectedGallery?.photos[selectedPhoto.photoIndex];

  useEffect(() => {
    if (!selectedGalleryId) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        setSelectedPhoto((current) =>
          getAdjacentPhoto(current, event.key === "ArrowRight" ? 1 : -1)
        );
      } else if (event.key === "Tab") {
        const buttons = dialogRef.current?.querySelectorAll(
          "button:not(:disabled)"
        );
        const firstButton = buttons?.item(0);
        const lastButton = buttons?.item(buttons.length - 1);

        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton?.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      triggerRef.current?.focus();
    };
  }, [selectedGalleryId]);

  const changePhoto = (direction) => {
    setSelectedPhoto((current) => getAdjacentPhoto(current, direction));
  };

  return (
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
                <button
                  key={`${gallery.id}-${photoIndex}`}
                  type="button"
                  onClick={(event) => {
                    triggerRef.current = event.currentTarget;
                    setSelectedPhoto({ galleryId: gallery.id, photoIndex });
                  }}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 text-left"
                  aria-label={`View ${gallery.title} photo ${photoIndex + 1}: ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 text-sm font-medium text-white">
                    {gallery.title} · 0{photoIndex + 1}
                  </span>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {selectedGallery && activePhoto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            className="absolute inset-0 h-full w-full cursor-default"
            aria-label="Close photo viewer"
            onClick={() => setSelectedPhoto(null)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedGallery.title} photo ${selectedPhoto.photoIndex + 1} of ${selectedGallery.photos.length}`}
            className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111] shadow-2xl"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition hover:bg-black"
              aria-label="Close photo viewer"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="relative flex min-h-0 items-center justify-center bg-black">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-h-[72vh] max-w-full object-contain"
              />
              <button
                type="button"
                onClick={() => changePhoto(-1)}
                className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition hover:bg-black"
                aria-label={`Previous ${selectedGallery.title} photo`}
              >
                <span aria-hidden="true">←</span>
              </button>
              <button
                type="button"
                onClick={() => changePhoto(1)}
                className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-2xl text-white transition hover:bg-black"
                aria-label={`Next ${selectedGallery.title} photo`}
              >
                <span aria-hidden="true">→</span>
              </button>
            </div>
            <p className="px-5 py-3 text-center text-sm text-secondary">
              {selectedGallery.title} · Photo {selectedPhoto.photoIndex + 1} of{" "}
              {selectedGallery.photos.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "gallery");
