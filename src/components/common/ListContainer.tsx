'use client'
import { useEffect } from 'react'
import List from '@mui/material/List'
import { useSharedList } from '@/hooks'

const ListContainer = ({ items, ItemComponent }: any) => {
  const { itemList, removeItem, updateList } = useSharedList()

  useEffect(() => {
    updateList(items)
  }, [items])

  return (
    <div className="p-5">
      {itemList?.map((item: any) => (
        <ItemComponent key={(item as any).id} item={item} />
      ))}
    </div>
  )
}

export default ListContainer
