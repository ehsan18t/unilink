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
      <h2>{title} List</h2>
      <ul>
        {universityList.length > 0 ? (
          universityList.map((university: University) => (
            <UniversityView key={university.id} university={university} />
          ))
        ) : (
          <p className="flex justify-center p-5 text-xl border-[1px]">
            No {title} found
          </p>
        )}
      </ul>
    </div>
  )
}

export default UniversityList
