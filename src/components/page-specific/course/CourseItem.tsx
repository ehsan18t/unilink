import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import { AiFillDelete } from 'react-icons/ai'
import { useMutation } from '@/hooks'
import { Course } from '@/types'
import { useDeleteCourseMutation } from '@/redux/features/courseApiSlice'
import Link from 'next/link'

interface Props {
  item: Course
  onDelete?: (course: Course) => void
}

const CourseItem = ({ item, onDelete }: Props) => {
  const course = item

  const { deleteOnAction } = useMutation(
    useDeleteCourseMutation,
    { course_id: course.id },
    'delete',
  )

  const handleDelete = async () => {
    try {
      const response = await deleteOnAction()
      if (onDelete && response.data?.status === 'success') {
        onDelete(course)
      }
    } catch (error) {
      console.error('Error deleting course:', error)
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
      <Link href={`course/${course.id}`}>
        <ListItemText
          primary={`[${course.code}] ${course.name}`}
          secondary={`${course.type == 1 ? 'Theory' : 'Lab'} - ${
            course.credit
          }`}
        />
      </Link>
    </ListItem>
  )
}

export default CourseItem
