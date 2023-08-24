'use client'
import { use, useEffect, useState } from 'react'
import List from '@mui/material/List'
import { useSharedList } from '@/hooks'

const ListContainer = ({ items, ItemComponent }: any) => {
  const [removedItem, setRemovedItem] = useState<any>()
  const { itemList, removeItem, updateList } = useSharedList()

  useEffect(() => {
    updateList(items)
  }, [items])

  useEffect(() => {
    if (removedItem) {
      removeItem(removedItem)
    }
  }, [removedItem])

  const handleDelete = async (item: any) => {
    if (item) setRemovedItem(item)
  }

  return (
    <div className="p-5">
      {itemList?.map((item: any) => (
        <ItemComponent
          key={(item as any).id}
          item={item}
          onDelete={(deletedItem: any | null) => handleDelete(deletedItem)}
        />
      ))}
    </div>
  )
}

export default ListContainer
