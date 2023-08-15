interface Props {
  university: any
}

const UniversityView = ({ university }: Props) => {
  const handleToggleApproveUniversity = () => {
    console.log('Approve University')
  }

  const handleToggleBanUniversity = () => {
    console.log('Ban University')
  }

  return (
    <li key={university.id}>
      <div className="user">
        <div className="primary">
          <h3>{university.name}</h3>
          <p>{university.domain}</p>
        </div>
        <div className="secondary">
          <h4>{university.admin.username}</h4>
          <p>{university.admin.id}</p>
        </div>
        <div className="action">
          <button
            className="btn-blue"
            onClick={() => handleToggleApproveUniversity()}
          >
            {university.is_approved ? 'Disapprove' : 'Approve'}
          </button>
          <button
            className="btn-red"
            onClick={() => handleToggleBanUniversity()}
          >
            {university.is_banned ? 'Unban' : 'Ban'}
          </button>
        </div>
      </div>
    </li>
  )
}

export default UniversityView
