import LineGradient from '../../components/LineGradient/LineGradient'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

  return (
    <section id="contact" className="contact py-48">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex w-full justify-end"
      >
        <div>
          <p className="font-playfair text-4xl font-semibold">
            <span className="text-yellow">CONTACT ME</span> TO GET STARTED
          </p>
          <div className="my-5 flex md:justify-end">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <div className="mt-5 gap-16 md:flex md:justify-between">
        <motion.div
          className="flex basis-1/2 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="assets/contact-image.jpeg" alt="contact" />
        </motion.div>

        <motion.div
          className="mt-10 basis-1/2 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/f32dff4e907926e37548b6737dd1d79a"
            method="POST"
          >
            <input
              className="w-full bg-blue p-3 font-semibold placeholder-opaque-black"
              type="text"
              placeholder="NAME"
              {...register('name', {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-red">
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'Max length is 100 char.'}
              </p>
            )}

            <input
              className="mt-5 w-full bg-blue p-3 font-semibold placeholder-opaque-black"
              type="text"
              placeholder="EMAIL"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-red">
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid email address.'}
              </p>
            )}

            <textarea
              className="mt-5 w-full bg-blue p-3 font-semibold placeholder-opaque-black"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register('message', {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-red">
                {errors.message.type === 'required' &&
                  'This field is required.'}
                {errors.message.type === 'maxLength' &&
                  'Max length is 2000 char.'}
              </p>
            )}

            <button
              className="mt-5 bg-yellow p-5 font-semibold text-deep-blue transition duration-500 hover:bg-red hover:text-white"
              type="submit"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
