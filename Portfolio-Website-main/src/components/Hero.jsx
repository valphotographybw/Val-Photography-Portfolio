import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => (
  <section
    id="top"
    className="relative flex min-h-[720px] h-[92vh] w-full items-center overflow-hidden bg-cover bg-center"
    style={{
      backgroundImage:
        "linear-gradient(90deg, rgba(12,10,8,0.88) 0%, rgba(12,10,8,0.62) 52%, rgba(12,10,8,0.2) 100%), url('https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=2200&q=90')",
    }}
  >
    <div className={`relative z-10 mx-auto w-full max-w-7xl pt-20 ${styles.paddingX}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-200 sm:text-base">
          Photography in Botswana
        </p>
        <h1 className="text-5xl font-semibold leading-[1.05] text-white sm:text-7xl lg:text-8xl">
          Your moments,
          <span className="mt-2 block font-light italic text-amber-100">beautifully remembered.</span>
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
          Portraits, studio sessions, birthdays, events, weddings, and
          graduations — captured with care by Val Photography.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#gallery"
            className="rounded-full bg-amber-200 px-7 py-3 font-semibold text-[#17120d] transition hover:bg-amber-100"
          >
            Explore the galleries
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/60 px-7 py-3 font-medium text-white transition hover:border-amber-200 hover:text-amber-200"
          >
            Book a session
          </a>
        </div>
      </motion.div>
    </div>
    <a
      href="#about"
      aria-label="Scroll to learn about Val Photography"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
    >
      Discover
      <span className="mx-auto mt-2 block h-8 w-px bg-amber-200/80" />
    </a>
  </section>
);

export default Hero;
