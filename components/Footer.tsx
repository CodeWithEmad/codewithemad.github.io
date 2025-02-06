const Footer = () => {
  return (
    <footer id='footer' className='py-8 text-sm text-gray-800 dark:text-gray-200'>
      <div className='container mx-auto px-4 text-center'>
        <p className='mb-3 text-base italic text-gray-600 dark:text-gray-400'>
          Believe in Open-Source. it will change the world, one contribution at a time.
        </p>

        <div className='mb-1 text-gray-600 dark:text-gray-400'>
          &copy; Copyright {new Date().getFullYear()} <strong>Emad Rad</strong>. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer
