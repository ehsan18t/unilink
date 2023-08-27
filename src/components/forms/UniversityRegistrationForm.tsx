'use client'
import { useUniversityRegister } from '@/hooks'
import { Input } from '@/components/forms'
import { Spinner } from '@/components/common'

export default function UniversityRegistrationForm() {
  const {
    name,
    domain,
    first_name,
    last_name,
    username,
    email,
    onChange,
    onSubmit,
    isLoading,
  } = useUniversityRegister()

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <Input
        key="name"
        labelId="name"
        type="text"
        onChange={onChange}
        value={name}
        required={true}
      >
        Name
      </Input>
      <Input
        key="domain"
        labelId="domain"
        type="text"
        onChange={onChange}
        value={domain}
        required={true}
      >
        Domain
      </Input>
      <Input
        key="first_name"
        labelId="first_name"
        type="text"
        onChange={onChange}
        value={first_name}
        required={true}
      >
        Admin First Name
      </Input>
      <Input
        key="last_name"
        labelId="last_name"
        type="text"
        onChange={onChange}
        value={last_name}
        required={true}
      >
        Admin Last Name
      </Input>
      <Input
        key="username"
        labelId="username"
        type="text"
        onChange={onChange}
        value={username}
        required={true}
      >
        Admin UserName
      </Input>
      <Input
        key="email"
        labelId="email"
        type="text"
        onChange={onChange}
        value={email}
        required={true}
      >
        Admin Email
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
