import { motion } from 'framer-motion'

const Project = ({ title, variant }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
  const projectTitle = title.split(' ').join('-').toLowerCase()

  return (
    <motion.div variants={variant} className="relative">
      <div className={overlayStyles}>
        <p className="font-playfair text-2xl">{title}</p>
        <p className="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  )
}

export default Project
