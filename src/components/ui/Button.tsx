import React from 'react'

interface Props {
  border?: string
  color?: string
  text?: string
  children?: React.ReactNode
  height?: string
  onClick?: () => void
  radius?: string
  width?: string
}

const Button: React.FC<Props> = ({
  border,
  color,
  text,
  children,
  height,
  onClick,
  radius,
  width
}) => {
  return (
    <button
      onClick={onClick}
      className=" border focus:outline-none focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-800 text-white border-gray-600 hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 my-5 disabled:text-gray-400 disabled:bg-gray-300"
      style={{
        backgroundColor: color,
        color: text,
        border,
        borderRadius: radius,
        height,
        width
      }}
    >
      {children}
    </button>
  )
}

export default Button
