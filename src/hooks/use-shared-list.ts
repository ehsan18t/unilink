import { useReducer } from "react";

export default function useSharedList<DataType>(): {
    itemList: DataType[] | undefined,
    updateList: (newList: DataType[]) => void,
    addItem: (item: DataType) => void,
    removeItem: (item: DataType) => void,
} {
    const [itemList, dispatch] = useReducer((state: DataType[], action: any) => {
        switch (action.type) {
            case "UPDATE":
                return action.payload;
            case "ADD":
                return [...state, action.payload];
            case "REMOVE":
                return state.filter(item => (item as any).id !== (action.payload as any).id);
            default:
                return state;
        }
    }, []);

    function update(newList: DataType[]) {
        dispatch({ type: "UPDATE", payload: newList });
    }

    function add(item: DataType) {
        dispatch({ type: "ADD", payload: item });
    }

    function remove(item: DataType) {
        dispatch({ type: "REMOVE", payload: item });
    }

    return {
        itemList: itemList,
        updateList: update,
        addItem: add,
        removeItem: remove
    }
}
