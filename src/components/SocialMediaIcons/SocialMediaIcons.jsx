import React from 'react'

const SocialMediaIcons = () => {
  return (
    <div className="my-10 flex justify-center gap-7 md:justify-start">
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.linkedin.com/in/renier-arias"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="assets/linkedin.png" />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="assets/twitter.png" />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="assets/facebook.png" />
      </a>
      <a
        className="transition duration-500 hover:opacity-50"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="assets/instagram.png" />
      </a>
    </div>
  )
}

export default SocialMediaIcons
