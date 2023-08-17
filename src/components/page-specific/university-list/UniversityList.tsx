import './university-list.css'
import UniversityView from './university'
import { University } from '@/types'

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
