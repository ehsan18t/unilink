import { useState, ChangeEvent, FormEvent } from 'react'
import { redirect } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { useLoginMutation } from '@/redux/features/authApiSlice'
import { setAuth } from '@/redux/features/authSlice'
import { toast } from 'react-toastify'

export default function useLogin() {
  const dispatch = useAppDispatch()
  const [login, { isLoading }] = useLoginMutation()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData({ ...formData, [name]: value })
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    login({ email, password })
      .unwrap()
      .then(() => {
        dispatch(setAuth())
        // toast.success('Logged in')
        redirect('/l/dashboard')
      })
      .catch((e) => {
        if (e.message !== 'NEXT_REDIRECT') toast.error('Failed to log in')
      })
  }

  return {
    email,
    password,
    isLoading,
    onChange,
    onSubmit,
  }
}
