import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useMediaQuery from '../../hooks/useMediaQuery'

const Link = ({ page = '', selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLocaleLowerCase()
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-yellow' : ''
      } transition duration-500 hover:text-yellow`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const isAboveSmallScreens = useMediaQuery('(min-width: 768px)')
  const navbarBackground = isTopOfPage ? '' : 'bg-red'

  const handleToggleMenu = () => setIsMenuToggled(!isMenuToggled)

  return (
    <nav className={`${navbarBackground} fixed top-0 z-40 w-full py-6`}>
      <div className="mx-auto flex w-5/6 items-center justify-between">
        <h4 className="text-3l font-playfair font-bold">JE</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-red p-2"
            onClick={handleToggleMenu}
          >
            <img src="../../assets/menu-icon.svg" alt="menu-icon" />
          </button>
        )}
        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full w-[300px] bg-blue">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={handleToggleMenu}>
                <img src="../../assets/close-icon.svg" alt="close-icon" />
              </button>
            </div>
            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
