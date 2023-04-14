import React from "react"
import { classNames } from "../../utils/utils"
interface ButtonProps {
  variant: Variant
  size: Size
  children?: React.ReactNode
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"]
  onClick?: () => void
  className?: string
  disabled?: boolean
  rest?: React.ButtonHTMLAttributes<HTMLButtonElement>
}

enum Variant {
  BASE,
  OUTLINE,
}

enum Size {
  SMALL,
  MEDIUM,
  LARGE,
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: "w-[68px] h-[40px]",
  [Size.MEDIUM]: "w-[118px] h-[40px]",
  [Size.LARGE]: "w-[147px] h-[40px]",
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.BASE]: "bg-primary text-white",
  [Variant.OUTLINE]: "bg-white text-primary border border-primary",
}

const Button = (props: ButtonProps) => {
  const { rest, onClick, type, variant, size, children } = props

  return (
    <button
      className={classNames(
        "rounded-md font-medium text-base",
        VARIANT_MAPS[variant],
        SIZE_MAPS[size]
      )}
      type={type}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: Variant.BASE,
  size: Size.SMALL,
}

Button.Variant = Variant
Button.Size = Size

export default Button
