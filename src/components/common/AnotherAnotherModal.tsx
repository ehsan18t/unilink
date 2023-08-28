import React, { useState } from 'react'
import Button from '@/components/common/Button'
import cn from 'classnames'
import { useSharedModal } from '@/hooks'

interface ModalProps {
  text?: string
  title?: string
  center?: boolean
  children: React.ReactNode
  sizeClass?: string
  buttonClass?: string
  modalKey?: string // Add a unique key for each modal
}

const Modal = ({
  text = 'Open',
  title,
  center = true,
  sizeClass = 'w-1/2',
  buttonClass = 'm-5',
  children,
  modalKey = 'modal1', // Make sure to include the modalKey prop
}: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const { isModalOpen, updateModalState } = useSharedModal()

  const openModal = () => {
    updateModalState(true)
  }

  const closeModal = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      updateModalState(false)
    }, 300) // Animation duration (milliseconds)
  }

  return (
    <div className="flex justify-center items-center">
      <Button className={buttonClass} onClick={openModal}>
        {text}
      </Button>

      <div
        className={`fixed inset-0 z-50 ${
          isModalOpen ? 'flex' : 'hidden'
        } items-center justify-center transition-opacity duration-300 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black ${
            isModalOpen ? 'opacity-50' : 'opacity-0'
          } transition-opacity duration-300`}
        ></div>

        <div
          className={cn(
            'bg-white rounded-lg p-6 shadow-md z-10 relative',
            sizeClass,
          )}
        >
          <button
            className="transition ease-in-out duration-300 absolute top-0 right-0 m-2 p-2 text-gray-600 hover:text-gray-800 hover:bg-slate-300 rounded-full"
            onClick={closeModal}
            aria-label="Close"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          {title && (
            <h1 className={`${center ? 'text-center' : ''} text-xl mb-4`}>
              {title}
            </h1>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
