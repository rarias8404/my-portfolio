import LineGradient from '../../components/LineGradient/LineGradient'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="text-center md:w-1/3 md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="mb-5 font-playfair text-4xl font-semibold text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          {`Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.`}
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="gap-8 md:flex md:justify-between">
        <motion.div
          className="relative mx-auto mt-48 flex h-[350px] max-w-[400px] flex-col justify-end bg-blue p-16
        before:absolute before:top-[-120px] before:left-1/2 before:-ml-[110px] before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-48 flex h-[350px] max-w-[400px] flex-col justify-end bg-red p-16
        before:absolute before:top-[-120px] before:left-1/2 before:-ml-[110px] before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
            lectus.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-48 flex h-[350px] max-w-[400px] flex-col justify-end bg-yellow p-16
        before:absolute before:top-[-120px] before:left-1/2 before:-ml-[110px] before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
