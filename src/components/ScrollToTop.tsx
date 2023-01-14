import { useEffect, useState } from 'react'
import { TbArrowBigTop } from 'react-icons/tb'

const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <div
      className={`fixed right-16 bottom-8 hidden flex-col gap-3 z-[1000] hover:bg-primary bg-complementary p-2 rounded-full ${
        show ? 'md:flex' : 'md:hidden'
      }`}
    >
      <button
        aria-label="Scroll To Top"
        type="button"
        onClick={handleScrollToTop}
        className="pushable"
      >
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front">
          <TbArrowBigTop className="h-6 w-6 text-primary hover:text-secondary " />
        </span>
      </button>
    </div>
  )
}

export default ScrollToTop
