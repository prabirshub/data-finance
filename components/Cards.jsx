import Image from 'next/image'

const Cards = () => {
  return (
    <div className='w-full py-44 bg-white px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-16'>
        {/* Card 1 */}
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 border'>
          <div className='w-32 h-32 mx-auto bg-white rounded-full border -mt-20 flex items-center justify-center'>
            <Image
              className='w-20'
              src={'/single.png'}
              width={200}
              height={200}
              alt=''
            />
          </div>
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-4xl text-center font-bold'>$149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-4 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-4'>1 Granted User</p>
            <p className='py-2 mx-4'>Send up to 2 GB</p>
          </div>
          <button className='bg-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
            Start Trial
          </button>
        </div>
        {/* Card 2 */}
        <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 border'>
          <div className='w-32 h-32 mx-auto bg-white rounded-full border -mt-20 flex items-center justify-center'>
            <Image
              className='w-20'
              src={'/double.png'}
              width={200}
              height={200}
              alt=''
            />
          </div>
          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-4xl text-center font-bold'>$149</p>
          <div className='text-center font-medium px-4'>
            <p className='py-2 border-b mx-4} mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-4}'>1 Granted User</p>
            <p className='py-2 mx-4}'>Send up to 2 GB</p>
          </div>
          <button className='bg-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
            Start Trial
          </button>
        </div>
        {/* Card 3 */}
        <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:scale-105 duration-300 border'>
          <div className='w-32 h-32 mx-auto bg-white rounded-full border -mt-20 flex items-center justify-center'>
            <Image
              className='w-20'
              src={'/triple.png'}
              width={200}
              height={200}
              alt=''
            />
          </div>

          <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
          <p className='text-4xl text-center font-bold'>$149</p>
          <div className='text-center font-medium px-4'>
            <p className='py-2 border-b mx-4 mt-8'>500 GB Storage</p>
            <p className='py-2 border-b mx-4'>1 Granted User</p>
            <p className='py-2 mx-4'>Send up to 2 GB</p>
          </div>
          <button className='bg-primary w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>
            Start Trial
          </button>
        </div>
      </div>
    </div>
  )
}
export default Cards
