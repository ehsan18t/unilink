'use client'
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'
import { AiOutlineHome, AiOutlineLogout } from 'react-icons/ai'
import { RiAdminLine } from 'react-icons/ri'
import Navbar from '@/components/common/nav/Navbar'
import { NavItem } from '@/components/common/nav/NavItem'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { useLogoutMutation } from '@/redux/features/authApiSlice'
import { logout as setLogout } from '@/redux/features/authSlice'
import { UserType } from '@/enums'
import { FiUser } from 'react-icons/fi'
import { AiOutlineUserAdd } from 'react-icons/ai'

const userTypes = {
  0: 'Site Admin',
  1: 'University Admin',
  2: 'Moderator',
  3: 'Faculty',
  4: 'Representatives',
  5: 'Student',
}

const ReadyNavBar = () => {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery()

  const dispatch = useAppDispatch()
  const [logout] = useLogoutMutation()
  const { isAuthenticated } = useAppSelector((state) => state.auth)

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout())
      })
  }
  return (
    <Navbar>
      {user && isAuthenticated && (
        <div className="pb-6 pl-3">
          <h1 className="text-lg">
            {user?.first_name + ' ' + user?.last_name}
          </h1>
          <h2 className="text-sm">{user?.email}</h2>
          <h2 className="text-xs">{userTypes[user.user_type]}</h2>
        </div>
      )}
      <NavItem to="/" name="Home" icon={AiOutlineHome} />
      {isAuthenticated && user?.user_type == UserType.SITE_ADMIN && (
        <>
          <NavItem
            to="/l/admin/site/dashboard"
            name="Admin Dashboard"
            icon={RiAdminLine}
          />
          <NavItem
            to="/l/admin/site/pending-university"
            name="Pending University"
            icon={RiAdminLine}
          />
          <NavItem
            to="/l/admin/site/approved-university"
            name="Approved University"
            icon={RiAdminLine}
          />
        </>
      )}
      {isAuthenticated && user?.user_type == UserType.UNIVERSITY_ADMIN && (
        <>
          <NavItem
            to="/l/admin/university/dashboard"
            name="Admin Dashboard"
            icon={RiAdminLine}
          />
          <NavItem
            to="/l/admin/university/course"
            name="Manage Course"
            icon={RiAdminLine}
          />
          <NavItem
            to="/l/admin/university/department"
            name="Manage Department"
            icon={RiAdminLine}
          />
          <NavItem
            to="/l/admin/university/faculty"
            name="Manage Faculty"
            icon={RiAdminLine}
          />
        </>
      )}
      {isAuthenticated ? (
        <NavItem name="Logout" icon={AiOutlineLogout} onClick={handleLogout} />
      ) : (
        <>
          <NavItem name="Login" icon={FiUser} to="/nl/auth/login" />
          <NavItem
            name="Registration"
            icon={AiOutlineUserAdd}
            to="/nl/auth/register"
          />
        </>
      )}
    </Navbar>
  )
}

export default ReadyNavBar
