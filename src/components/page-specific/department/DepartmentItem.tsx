import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import { AiFillDelete } from 'react-icons/ai'
import { useMutation } from '@/hooks'
import { Department } from '@/types'
import { useDeleteDepartmentMutation } from '@/redux/features/departmentApiSlice'

interface Props {
  item: Department
  onDelete?: (department: Department) => void
}

const DepartmentItem = ({ item, onDelete }: Props) => {
  const department = item

  const { deleteOnAction } = useMutation(
    useDeleteDepartmentMutation,
    { department_id: department.id },
    'delete',
  )

  const handleDelete = async () => {
    try {
      const response = await deleteOnAction()
      if (onDelete && response.data?.status === 'success') {
        onDelete(department)
      }
    } catch (error) {
      console.error('Error deleting department:', error)
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
      <ListItemText primary={department.name} secondary={department.code} />
    </ListItem>
  )
}

export default DepartmentItem
