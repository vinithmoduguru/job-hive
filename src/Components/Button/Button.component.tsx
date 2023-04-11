import React from "react"

interface ButtonProps {
  type: ButtonType
  children: React.ReactNode
  className?: string
  disabled?: boolean
  rest?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

export enum ButtonType {
  PRIMARY = "primary",
  LG_PRIMARY = "lg-primary",
  LG_INVERTED = "lg-inverted",
}

const buttonClasses = {
  [ButtonType.PRIMARY]:
    "w-[68px] h-[40px] bg-primary text-white rounded-md text-sm font-medium",
  [ButtonType.LG_PRIMARY]:
    "w-[118px] h-[40px] bg-primary text-white rounded-md text-sm font-medium",
  [ButtonType.LG_INVERTED]:
    "w-[147px] h-[40px] bg-white text-primary rounded-md font-medium border border-primary",
}

const Button = (props: ButtonProps) => {
  const { children, type, rest } = props
  const buttonClass = buttonClasses[type]

  return (
    <button className={buttonClass} {...rest}>
      {props.children}
    </button>
  )
}

export default Button
