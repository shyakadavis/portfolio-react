import React from 'react'
import {
  FaTwitter,
  FaInstagram,
  FaMailBulk,
  FaLinkedinIn,
  FaGithub
} from 'react-icons/fa'

interface SocialLink {
  name: string
  href: string
  icon: JSX.Element
}

const socialLinks: SocialLink[] = [
  {
    name: 'Mail',
    href: 'mailto:shyakakingdavis@gmail.com',
    icon: <FaMailBulk size={26} />
  },
  {
    name: 'LinkedIn',
    href: 'https://rw.linkedin.com/in/davis-shyaka-506910232',
    icon: <FaLinkedinIn size={26} />
  },
  {
    name: 'Github',
    href: 'https://github.com/davis-shyaka',
    icon: <FaGithub size={26} />
  },
  { name: 'Twitter', href: '', icon: <FaTwitter /> },
  {
    name: 'Instagram',
    href: '',
    icon: <FaInstagram size={26} />
  }
]

const SocialLinks: React.FC = () => {
  return (
    <div className="text-secondary flex justify-around flex-wrap">
      {socialLinks.map(
        (socialLink) =>
          socialLink.href && (
            <a href={socialLink.href} key={socialLink.href} target="_blank">
              {socialLink.icon}
            </a>
          )
      )}
    </div>
  )
}

export default SocialLinks
