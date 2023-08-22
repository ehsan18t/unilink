import React, { useState } from 'react'
import Button from '@/components/common/Button'

interface ModalProps {
  text?: string
  title?: string
  children: React.ReactNode
}

const Modal = ({ text = 'Open', title, children }: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsAnimating(false)
      setIsModalOpen(false)
    }, 300) // Animation duration (milliseconds)
  }

  return (
    <div className="flex justify-center items-center">
      <Button onClick={openModal}>{text}</Button>

      <div
        className={`fixed inset-0 z-50 ${
          isModalOpen ? 'flex' : 'hidden'
        } items-center justify-center transition-opacity duration-300 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white rounded-lg p-6 shadow-md z-10">
          {title && <h1 className="text-xl mb-4">{title}</h1>}
          {children}
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
