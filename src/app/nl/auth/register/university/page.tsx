import Link from 'next/link'
import UniversityRegistrationForm from '@/components/forms/UniversityRegistrationForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'UniLink | Register',
  description: 'UniLink register page',
}

export default function Page() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-24 w-auto" src="/logo.png" alt="UniLink" />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up for your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <UniversityRegistrationForm />

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link
            href="/nl/auth/login"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  )
}
