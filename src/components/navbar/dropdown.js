import React, { useState } from "react"
import { Transition } from "@headlessui/react"

export const Dropdown = ({ elements, classButton, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onClick = () => setIsOpen(!isOpen)

  return (
    <div class="ml-3 relative">
      <div>
        <button
          type="button"
          onClick={onClick}
          className={classButton}
          id="user-menu"
          aria-expanded="false"
          aria-haspopup="true"
        >
          {children}
        </button>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {ref => (
          <div
            ref={ref}
            class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            {elements.map(element => (
              <a
                href={element.url}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {element.text}
              </a>
            ))}
          </div>
        )}
      </Transition>
    </div>
  )
}
