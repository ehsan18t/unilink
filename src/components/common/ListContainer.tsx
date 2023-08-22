'use client'
import { useEffect, useState } from 'react'
import List from '@mui/material/List'

const ListContainer = ({ items, ItemComponent }: any) => {
  const [removedItem, setRemovedItem] = useState<any>()
  const [itemList, setItemList] = useState<any[]>([])

  useEffect(() => {
    setItemList(items)
  }, [items])

  useEffect(() => {
    if (removedItem) {
      setItemList((prev) => {
        return prev?.filter(
          (item) => (item as any).id !== (removedItem as any).id,
        )
      })
    }
  }, [removedItem])

  const handleDelete = async (item: any) => {
    if (item) setRemovedItem(item)
  }

  return (
    <List dense={false}>
      {itemList?.map((item: any) => (
        <ItemComponent
          key={(item as any).id}
          item={item}
          onDelete={(deletedItem: any | null) => handleDelete(deletedItem)}
        />
      ))}
    </List>
  )
}

export default ListContainer
