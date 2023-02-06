import SocialMediaIcons from '../../components/SocialMediaIcons/SocialMediaIcons'
import useMediaQuery from '../../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery('(min-width: 1060px)')

  return (
    <section
      id="home"
      className="gap-16 py-10 md:flex md:h-full md:items-center md:justify-between"
    >
      {/* IMAGE SECTION */}
      <div className="z-10 mt-16 flex basis-3/5 justify-center md:order-2 md:mt-32">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:z-[-1]
            before:h-full before:w-full before:max-w-[400px] before:rounded-t-[400px] before:border-2 before:border-blue md:before:max-w-[600px]"
          >
            <img
              alt="profile"
              className="z-10 w-full max-w-[400px] transition duration-500 hover:saturate-200 hover:filter md:max-w-[600px]"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 mt-12 basis-2/5 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="z-10 text-center font-playfair text-6xl md:text-start">
            Jane {''}
            <span
              className="z-20 before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]
              xs:relative xs:font-semibold xs:text-deep-blue xs:before:content-brush"
            >
              Esper
            </span>
          </p>

          <p className="mt-10 mb-7 text-center text-sm md:text-start">
            Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
            viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="rounded-sm bg-gradient-rainblue py-3 px-7 font-semibold text-deep-blue
              transition duration-500 hover:bg-blue hover:text-white"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage('contact')}
            href="#contact"
          >
            <div className="flex h-full w-full items-center justify-center bg-deep-blue px-10 font-playfair transition duration-500 hover:text-red">
              {`Let's talk.`}
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="mt-5 flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  )
}

export default Landing
