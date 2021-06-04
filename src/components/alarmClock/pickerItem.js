import React from 'react';

export const PickerItem = ({ item, selected, selectItem }) => {
    return (
        <p
            onClick={() => selectItem(item)}
            className={selected ?
                "bg-blue-600 text-white py-2 cursor-default w-full flex justify-center rounded-sm"
                :
                "py-2 text-black cursor-default hover:bg-blue-300 w-full flex justify-center rounded-sm"}
        >
            {item}
        </p>
    )
}
