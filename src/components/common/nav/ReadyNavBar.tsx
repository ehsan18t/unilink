'use client'
import { useRetrieveUserQuery } from '@/redux/features/authApiSlice'
import { AiOutlineHome, AiOutlineShop } from 'react-icons/ai'
import { RiAdminLine } from 'react-icons/ri'
import Navbar from '@/components/common/nav/Navbar'
import { NavItem } from '@/components/common/nav/NavItem'

const ReadyNavBar = () => {
    const { data: user, isLoading, isFetching } = useRetrieveUserQuery()
    return (
        <Navbar>
            <NavItem to="/" name="Home" icon={AiOutlineHome} />
            <NavItem to="#" name="Shop" icon={AiOutlineShop} />
            {user && user.user_type < 2 && (
                <NavItem to="/admin" name="Admin Panel" icon={RiAdminLine} />
            )}
        </Navbar>
  )
}

export default ReadyNavBar