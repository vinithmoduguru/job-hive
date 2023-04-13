import React from "react"

interface FormInputProps {
  type: string
  label: string
  value: any
  onChange: (value: any) => void
  name?: string
  checked?: boolean
  options?: { value: any; label: string }[]
  placeholder?: string
  size?: string
  required?: boolean
}

const FormInput = (props: FormInputProps) => {
  const { type, label, value, onChange, options, placeholder, size, name } =
    props
  const inputProps = {
    name,
    type,
    value,
    onChange,
    placeholder,
  }

  let inputClass
  switch (size) {
    case "md":
      inputClass =
        "w-[244.5px] h-[36px] bg-white focus:outline-none focus:shadow-outline border border-#E6E6E6 rounded-[5px] py-[8px] px-[12px] block appearance-none leading-normal"
      break
    case "lg":
      inputClass =
        "w-[513px] h-[36px] bg-white focus:outline-none focus:shadow-outline border border-#E6E6E6 rounded-[5px] py-[8px] px-[12px] block appearance-none leading-normal"
      break
    default:
      inputClass =
        "w-[513px] h-[36px] bg-white focus:outline-none focus:shadow-outline border border-#E6E6E6 rounded-[5px] py-[8px] px-[12px] block appearance-none leading-normal"
      break
  }

  let inputElement

  switch (type) {
    case "range":
      inputElement = (
        <div className="flex gap-6 items-center">
          <input type="number" className={inputClass} placeholder="Minimum" />
          <input type="number" className={inputClass} placeholder="Maximum" />
        </div>
      )
      break
    case "text":
      inputElement = <input {...inputProps} className={inputClass} />
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
                />
                {option.label}
              </label>
            )))
          }
        </div>
      )
      break
    default:
      inputElement = <input {...inputProps} className={inputClass} />
      break
  }

  return (
    <div className="my-4">
      <label className="block mb-1">{label}</label>
      {inputElement}
    </div>
  )
}

export default FormInput
