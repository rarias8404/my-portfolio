import LineGradient from '../../components/LineGradient/LineGradient'
import { motion } from 'framer-motion'
import Project from '../../components/Project/Project'

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="mx-auto text-center md:w-2/4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair text-4xl font-semibold">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="mt-5 flex justify-center">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-red
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1" variant={projectVariant} />
          <Project title="Project 2" variant={projectVariant} />

          {/* ROW 2 */}
          <Project title="Project 3" variant={projectVariant} />
          <Project title="Project 4" variant={projectVariant} />
          <Project title="Project 5" variant={projectVariant} />

          {/* ROW 3 */}
          <Project title="Project 6" variant={projectVariant} />
          <Project title="Project 7" variant={projectVariant} />
          <div
            className="flex max-h-[400px] max-w-[400px] items-center justify-center bg-red
              p-10 text-center font-playfair text-2xl font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
