import { useReducer } from "react";

let isOpen = false

export default function useSharedModal(): {
    isModalOpen: boolean | undefined,
    updateModalState: (open: boolean) => void
} {
    const triggerRender = useReducer((bool) => !bool, true)[1]

  function update(open: boolean) {
    isOpen = open
    triggerRender()
  }

  return { isModalOpen: isOpen, updateModalState: update }
}