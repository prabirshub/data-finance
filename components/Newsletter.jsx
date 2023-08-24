const Newsletter = () => {
  return (
    <div className='w-full py-16 text-gray-100 px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h2 className='capitalize text-2xl sm:text-3xl md:text-4xl font-bold mb-4'>
            Want tips & tricks to optimize your flow?
          </h2>
          <p className='text-gray-400 text-lg md:text-xl mb-4 lg:mb-0'>
            Sign up to our newsletter and stay up to date.
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col sm:flex-row gap-4 sm:items-center justify-between w-full'>
            <input
              className='w-full flex p-3 rounded-md'
              type='text'
              placeholder='Enter email'
            />
            <button className='bg-primary text-[#000300] rounded-md font-medium w-[200px] py-3'>
              Notify me
            </button>
          </div>
          <p>
            We care about the protection of data. Read our{' '}
            <span className='text-primary'> Privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
