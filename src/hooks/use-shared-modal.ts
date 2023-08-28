import { useReducer } from "react";

export default function useSharedModal(initialState = false) {
  const [isOpen, triggerRender] = useReducer((bool) => !bool, initialState);

  function update(open: boolean) {
    triggerRender();
  }

  return { isModalOpen: isOpen, updateModalState: update };
}
