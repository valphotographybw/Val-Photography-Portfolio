import { motion } from "framer-motion";
import { serviceGalleries } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Val Photography · Botswana</p>
      <h2 className={styles.sectionHeadText}>The moments that matter.</h2>
    </motion.div>

    <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-5 max-w-3xl text-[17px] leading-8 text-secondary"
    >
      Val Photography captures people, milestones, and celebrations across
      Botswana. From a relaxed portrait session to the energy of a wedding or
      event, every gallery is made to help you keep the moments you love.
    </motion.p>

    <div id="services" className="scroll-mt-24 pt-16">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
        Photography services
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {serviceGalleries.map((service, index) => (
          <motion.a
            key={service.id}
            href={`#${service.id}`}
            variants={fadeIn("up", "spring", index * 0.08, 0.5)}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-amber-200/50 hover:bg-white/[0.06]"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-secondary">
              0{index + 1}
            </span>
            <h3 className="mt-4 text-2xl font-semibold text-white group-hover:text-amber-200">
              {service.title}
            </h3>
            <p className="mt-2 leading-7 text-secondary">{service.description}</p>
            <span className="mt-5 inline-block text-sm font-medium text-amber-300">
              View gallery <span aria-hidden="true">→</span>
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </>
);

export default SectionWrapper(About, "about");
