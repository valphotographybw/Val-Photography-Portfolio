import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const contactOptions = [
  {
    label: "Email",
    value: "valphotographybw@gmail.com",
    href: "mailto:valphotographybw@gmail.com",
  },
  {
    label: "Call",
    value: "+267 76156208",
    href: "tel:+26776156208",
  },
  {
    label: "WhatsApp",
    value: "Message Val Photography",
    href: "https://wa.me/26776156208",
  },
];

const Contact = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Let’s create something memorable</p>
      <h2 className={styles.sectionHeadText}>Book a session</h2>
    </motion.div>

    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-5 grid gap-8 lg:grid-cols-[1fr_1.2fr]"
    >
      <div>
        <p className="max-w-xl text-[17px] leading-8 text-secondary">
          Tell us what you’re celebrating or the kind of portraits you have in
          mind. Get in touch to discuss availability and plan your photography
          session.
        </p>
        <p className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
          Based in Botswana
        </p>
      </div>

      <div className="grid gap-3">
        {contactOptions.map((option) => (
          <a
            key={option.label}
            href={option.href}
            target={option.label === "WhatsApp" ? "_blank" : undefined}
            rel={option.label === "WhatsApp" ? "noreferrer" : undefined}
            className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-amber-200/50 hover:bg-white/[0.06] sm:px-7"
          >
            <span className="text-sm font-medium uppercase tracking-[0.15em] text-secondary">
              {option.label}
            </span>
            <span className="break-all text-right font-medium text-white hover:text-amber-200">
              {option.value}
            </span>
          </a>
        ))}
      </div>
    </motion.div>

    <footer className="mt-16 border-t border-white/10 pt-6 text-sm text-secondary">
      © {new Date().getFullYear()} Val Photography · Botswana
    </footer>
  </>
);

export default SectionWrapper(Contact, "contact");
