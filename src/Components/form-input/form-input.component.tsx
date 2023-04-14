import React from "react"
import { classNames } from "../../utils/utils"

interface FormInputProps {
  type: string
  label: string
  value: any
  onChange: (value: any) => void
  size: Size
  variant: Variant
  name?: string
  checked?: boolean
  options?: { value: any; label: string }[]
  placeholder?: string
  required?: boolean
}

enum Variant {
  BASE,
}

enum Size {
  MEDIUM,
  LARGE,
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.MEDIUM]: "w-[244.5px] h-[36px]",
  [Size.LARGE]: "w-[513px] h-[36px]",
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.BASE]:
    "bg-white focus:outline-none focus:shadow-outline border border-#E6E6E6 rounded-[5px] py-[8px] px-[12px] block appearance-none leading-normal",
}

const FormInput = (props: FormInputProps) => {
  const {
    type,
    label,
    value,
    onChange,
    options,
    placeholder,
    size,
    variant,
    name,
  } = props
  const inputProps = {
    name,
    type,
    value,
    onChange,
    placeholder,
  }

  let inputElement

  switch (type) {
    case "range":
      inputElement = (
        <div className="flex gap-6 items-center">
          <input
            type="number"
            className={classNames(SIZE_MAPS[size], VARIANT_MAPS[variant])}
            placeholder="Minimum"
            value={value[0]}
            onChange={(e) => onChange([e.target.value, value[1]])}
          />
          <input
            type="number"
            className={classNames(SIZE_MAPS[size], VARIANT_MAPS[variant])}
            placeholder="Maximum"
            value={value[1]}
            onChange={(e) => onChange([value[0], e.target.value])}
          />
        </div>
      )
      break
    case "text":
      inputElement = (
        <input
          {...inputProps}
          className={classNames(SIZE_MAPS[size], VARIANT_MAPS[variant])}
        />
      )
      break
    case "radio":
      inputElement = (
        <div className="flex gap-4 items-center">
          {
            (inputElement = options?.map((option) => (
              <label
                key={option.value}
                className="flex items-center text-light">
                <input
                  {...inputProps}
                  id={option.value}
                  value={option.value}
                  onChange={() => onChange(option.value)}
                  className="mr-2"
                  checked={value === option.value}
                />
                {option.label}
              </label>
            )))
          }
        </div>
      )
      break
    default:
      inputElement = (
        <input
          {...inputProps}
          className={classNames(SIZE_MAPS[size], VARIANT_MAPS[variant])}
        />
      )
      break
  }

  return (
    <div className="my-4">
      <label className="block mb-1">{label}</label>
      {inputElement}
    </div>
  )
}

FormInput.defaultProps = {
  type: "text",
  size: Size.LARGE,
  variant: Variant.BASE,
}

FormInput.Variant = Variant
FormInput.Size = Size

export default FormInput
