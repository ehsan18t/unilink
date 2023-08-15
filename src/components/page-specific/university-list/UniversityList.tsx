import './university-list.css'
import UniversityView from './university'

interface User {
  id: number
  first_name: string
  last_name: string
  username: string
  email: string
  university: number
  department: number
  profile_picture: string
  user_type: number
}

interface University {
  id: number
  name: string
  domain: string
  admin: User
  is_approved: boolean
  is_banned: boolean
}

interface Props {
  title: string
  universityList: University[]
}

const UniversityList = ({ title = 'List', universityList }: Props) => {
  return (
    <div className="user-list">
      <h2>{title}</h2>
      <ul>
        {universityList.map((university: University) => (
          <UniversityView key={university.id} university={university} />
        ))}
      </ul>
    </div>
  )
}

export default UniversityList
