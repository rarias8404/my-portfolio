import LineGradient from '../../components/LineGradient/LineGradient'
import useMediaQuery from '../../hooks/useMediaQuery'
import { motion } from 'framer-motion'

const Skills = () => {
  const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="mt-32 md:flex md:justify-between md:gap-16">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="mb-5 font-playfair text-4xl font-semibold">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:z-[-1] before:h-full before:w-full before:border-2 before:border-blue"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="mt-16 gap-32 md:flex md:justify-between">
        {/* EXPERIENCE */}
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-5xl font-semibold">01</p>
              <p className="mt-3 font-playfair text-3xl font-semibold">
                Experience
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-blue md:w-3/4" />
          </div>
          <p className="mt-5">
            A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
            morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
            odio sit sagittis,
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-5xl font-semibold">02</p>
              <p className="mt-3 font-playfair text-3xl font-semibold">
                Innovative
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-red md:w-3/4" />
          </div>
          <p className="mt-5">
            Urna, eget pulvinar dolor cursus volutpat dictum odio. Nec ultricies
            amet in in neque nibh tortor. Libero sed pretium justo nulla blandit
            nulla amet habitant iaculis. Iaculis in congue vitae sollicitudin
            faucibus a
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="mt-10 md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair text-5xl font-semibold">03</p>
              <p className="mt-3 font-playfair text-3xl font-semibold">
                Imaginative
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1] h-32 w-1/2 bg-yellow md:w-3/4" />
          </div>
          <p className="mt-5">
            Accumsan eu fringilla nisi, eget. Vitae, eget ut id proin arcu in
            curabitur. Lectus libero, egestas enim aliquam quis felis amet.
            Sagittis, amet netus fringilla netus lobortis odio sed platea.
            Bibendum.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
