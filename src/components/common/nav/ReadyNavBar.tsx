'use client'
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'
import { AiOutlineHome, AiOutlineShop, AiOutlineMessage } from 'react-icons/ai'
import { RiAdminLine } from 'react-icons/ri'
import Navbar from '@/components/common/nav/Navbar'
import { NavItem } from '@/components/common/nav/NavItem'

const ReadyNavBar = () => {
  const { data: user, isLoading, isFetching } = useRetrieveUserQuery()
  return (
    <Navbar>
      <NavItem to="/" name="Home" icon={AiOutlineHome} />
      <NavItem to="#" name="Shop" icon={AiOutlineShop} />
      {user && user.user_type == 0 && (
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

      {user && user.user_type == 5 && (
        <>
          <NavItem
            to="/l/chat/"
            name="Chat"
            icon={AiOutlineMessage}
          />
        </>
      )}

    </Navbar>
  )
}

export default ReadyNavBar
