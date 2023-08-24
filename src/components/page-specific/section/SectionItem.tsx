import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import { AiFillDelete } from 'react-icons/ai'
import { useMutation } from '@/hooks'
import { Section } from '@/types'
import { useDeleteSectionMutation } from '@/redux/features/sectionApiSlice'

interface Props {
  item: Section
  onDelete?: (section: Section) => void
}

const SectionItem = ({ item, onDelete }: Props) => {
  const section = item

  const { deleteOnAction } = useMutation(
    useDeleteSectionMutation,
    { section_id: section.id },
    'delete',
  )

  const handleDelete = async () => {
    try {
      const response = await deleteOnAction()
      if (onDelete && response.data?.status === 'success') {
        onDelete(section)
      }
    } catch (error) {
      console.error('Error deleting section:', error)
    }
  }

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <AiFillDelete className="text-red-400 hover:text-red-500" />
        </IconButton>
      }
    >
      <ListItemText primary={section.name} secondary={section.trimester} />
    </ListItem>
  )
}

export default SectionItem
