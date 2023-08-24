import { useReducer } from "react";

interface SharedListState<DataType> {
    itemList: DataType[];
    lastRemovedItem: DataType | undefined;
    lastAddedItem: DataType | undefined;
}

type SharedListAction<DataType> =
    | { type: "UPDATE"; payload: DataType[] }
    | { type: "ADD"; payload: DataType }
    | { type: "REMOVE"; payload: DataType };

export default function useSharedList<DataType>(): {
    itemList: DataType[];
    lastRemovedItem: DataType | undefined;
    lastAddedItem: DataType | undefined;
    updateList: (newList: DataType[]) => void;
    addItem: (item: DataType) => void;
    removeItem: (item: DataType) => void;
} {
    const [state, dispatch] = useReducer(
        (prevState: SharedListState<DataType>, action: SharedListAction<DataType>) => {
            switch (action.type) {
                case "UPDATE":
                    return { ...prevState, itemList: action.payload };
                case "ADD":
                    return { ...prevState, itemList: [...prevState.itemList, action.payload], lastAddedItem: action.payload };
                case "REMOVE":
                    return {
                        ...prevState,
                        itemList: prevState.itemList.filter(
                            item => (item as any).id !== (action.payload as any).id
                        ),
                        lastRemovedItem: action.payload,
                    };
                default:
                    return prevState;
            }
        },
        { itemList: [], lastAddedItem: undefined, lastRemovedItem: undefined }
    );

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
        itemList: state.itemList,
        lastAddedItem: state.lastAddedItem,
        lastRemovedItem: state.lastRemovedItem,
        updateList: update,
        addItem: add,
        removeItem: remove,
    };
}
