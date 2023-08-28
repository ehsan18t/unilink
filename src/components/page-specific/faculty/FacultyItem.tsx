import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import { AiFillDelete } from 'react-icons/ai'
import { useMutation } from '@/hooks'
import { User } from '@/types'
import { useDeleteFacultyMutation } from '@/redux/features/universityApiSlice'

interface Props {
  item: User
  onDelete?: (faculty: User) => void
}

const FacultyItem = ({ item, onDelete }: Props) => {
  const faculty = item

  const { deleteOnAction } = useMutation(
    useDeleteFacultyMutation,
    { faculty_id: faculty.id },
    'delete',
  )

  const handleDelete = async () => {
    try {
      const response = await deleteOnAction()
      if (onDelete && response.data?.status === 'success') {
        onDelete(faculty)
      }
    } catch (error) {
      console.error('Error deleting faculty:', error)
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
      <ListItemText
        primary={faculty.first_name + ' ' + faculty.last_name}
        secondary={faculty.email + '[' + faculty.username + ']'}
      />
    </ListItem>
  )
}

export default FacultyItem
