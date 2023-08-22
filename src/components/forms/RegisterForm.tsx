'use client'

import { useState, useEffect } from 'react'
import { useRegister } from '@/hooks'
import { Input, Select } from '@/components/forms'
import { Spinner } from '@/components/common'
import { University } from '@/types'
import { useRetrievePublicUniversityQuery } from '@/redux/features/universityApiSlice'

interface Option {
  value: number
  label: string
  isEnabled: boolean
}

export default function RegisterForm() {
  const {
    first_name,
    last_name,
    username,
    university,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  } = useRegister()

  // Initialize the options state with the initial value
  const [options, setOptions] = useState<Option[]>([
    {
      value: 0,
      label: 'Select a university',
      isEnabled: true,
    },
  ])

  // Function to fetch data and update options
  const { data: universityList, isFetching } =
    useRetrievePublicUniversityQuery()

  useEffect(() => {
    if (universityList) {
      const updatedOptions = [
        {
          value: 0,
          label: 'Select a university',
          isEnabled: true,
        },
        ...universityList.map((item: University) => ({
          value: item.id,
          label: item.name,
          isEnabled: true,
        })),
      ]
      setOptions(updatedOptions)
    }
  }, [universityList])

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <Input
        key="first_name"
        labelId="first_name"
        type="text"
        onChange={onChange}
        value={first_name}
        required={true}
      >
        First name
      </Input>
      <Input
        key="last_name"
        labelId="last_name"
        type="text"
        onChange={onChange}
        value={last_name}
        required={true}
      >
        Last name
      </Input>
      <Input
        key="username"
        labelId="username"
        type="text"
        onChange={onChange}
        value={username}
        required={true}
      >
        Username
      </Input>
      <Select
        key="university"
        labelId="university"
        onChange={onChange}
        value={university}
        required={true}
        options={options}
      >
        University
      </Select>
      <Input
        key="email"
        labelId="email"
        type="email"
        onChange={onChange}
        value={email}
        required={true}
      >
        Email address
      </Input>
      <Input
        key="password"
        labelId="password"
        type="password"
        onChange={onChange}
        value={password}
        required={true}
      >
        Password
      </Input>
      <Input
        key="re_password"
        labelId="re_password"
        type="password"
        onChange={onChange}
        value={re_password}
        required={true}
      >
        Confirm password
      </Input>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isLoading}
        >
          {isLoading ? <Spinner sm /> : `Sign Up`}
        </button>
      </div>
    </form>
  )
}
