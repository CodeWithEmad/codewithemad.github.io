import Link from 'next/link'

export default function NotFound() {
  return (
    <div id='404-page' className='container flex min-h-screen items-center justify-center'>
      <div className='mx-auto max-w-xl p-8 text-center'>
        <h1 className='text-9xl font-bold text-gray-800 dark:text-gray-200'>404</h1>
        <h2 className='mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-300'>Page Not Found</h2>
        <p className='mt-4 text-gray-500'>
          Oops! The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link
          href='/'
          className='mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 dark:text-white'
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
