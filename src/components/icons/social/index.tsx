import React, { FunctionComponent } from 'react';
import { IconName } from './iconTypes';
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineGlobal,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiExternalLink, FiMail, FiLink2 } from 'react-icons/fi';

interface Props {
  kind: IconName;
  href?: string;
  size: number;
}

export const SocialIcon: FunctionComponent<Props> = ({ kind, href, size }) => {
  const iconMap = {
    mail: FiMail,
    github: AiOutlineGithub,
    facebook: AiOutlineFacebook,
    linkedin: FaLinkedinIn,
    twitter: AiOutlineTwitter,
    website: AiOutlineGlobal,
    external: FiExternalLink,
    internal: FiLink2,
  };

  const SocialSvg = iconMap[kind];

  if (!SocialSvg) {
    return null;
  }

  if (
    !href ||
    (kind === 'mail' &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  return (
    <a
      className="text-sm text-gray-500 transition duration-200 hover:rotate-180 hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`text-gray-700 hover:text-secondary dark:text-gray-200 dark:hover:text-primary-color-dark-500 h-${size} w-${size}`}
      />
    </a>
  );
};
