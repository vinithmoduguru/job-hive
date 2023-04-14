import { Dialog, Transition } from "@headlessui/react"
import React from "react"
import { classNames } from "../../utils/utils"

enum Size {
  SMALL,
  MEDIUM,
  LARGE,
}

enum Variant {
  BASE,
}
interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  size: Size
  variant: Variant
}

const SIZE_MAPS: Record<Size, string> = {
  [Size.SMALL]: "max-w-[320px] h-[384px]",
  [Size.MEDIUM]: "max-w-[577px] h-[564px]",
  [Size.LARGE]: "max-w-[1024px] h-[768px]",
}

const VARIANT_MAPS: Record<Variant, string> = {
  [Variant.BASE]:
    "inline-block w-full p-8 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-[10px] border border-#E6E6E6 gap-6",
}

const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children, size, variant } = props

  return (
    <Transition appear show={isOpen} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <div className={classNames(SIZE_MAPS[size], VARIANT_MAPS[variant])}>
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

Modal.defaultProps = {
  size: Size.MEDIUM,
  variant: Variant.BASE,
}

Modal.Size = Size
Modal.Variant = Variant

export default Modal
