import React, { FunctionComponent } from 'react'
import { IconName } from './iconTypes'

interface Props {
  kind: IconName
  className?: string
}

export const OtherIcon: FunctionComponent<Props> = ({ kind, className }) => {
  const iconMap = {
    folder: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-folder"
      >
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
      </svg>
    ),
    singularity: (
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="blur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
        <circle cx="50" cy="50" r="40" fill="black" filter="url(#blur)" />
        <circle cx="50" cy="50" r="30" fill="white" filter="url(#blur)" />
        <circle cx="50" cy="50" r="25" fill="black" filter="url(#blur)" />
        <circle cx="50" cy="50" r="20" fill="white" filter="url(#blur)" />
        <circle cx="50" cy="50" r="15" fill="black" filter="url(#blur)" />
        <circle cx="50" cy="50" r="10" fill="white" filter="url(#blur)" />
      </svg>
    )
  }

  const OtherSvg = iconMap[kind]

  if (!OtherSvg) {
    return null
  }

  return <div className={className}>{OtherSvg}</div>
}
