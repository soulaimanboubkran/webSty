import { Link } from 'react-router-dom'
import gif1 from '../assets/gif3.gif'

const Welcome = () => {
  return (
    <section className=' flex items-center px-10 pt-10'>
      <main className='container mx-auto flex flex-col lg:flex-row pt-10'>
        <div className="w-full lg:w-7/12 ">
          <h1 className='text-4xl lg:text-6xl mb-6 lg:mb-10 font-extrabold '>
            The most popular <br />
            <span className="bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
              component library
            </span>
            for Tailwind CSS
          </h1>
          <p className='text-base lg:text-lg font-semibold text-gray-400'>
            Websty adds  component class names to Tailwind CSS so you can make beautiful websites faster than ever.
          </p>

          <div className='flex flex-col lg:flex-row items-center gap-4 py-6 lg:py-10'>
            <Link to='/components' className='w-full lg:w-auto px-6 py-3 border rounded-xl hover:bg-blue-600 bg-blue-700 text-white text-base lg:text-lg mb-4 lg:mb-0'>
              See components
            </Link>
            <Link to='/' className='w-full lg:w-auto px-6 py-3 border rounded-xl hover:bg-gray-600 bg-gray-700 text-white text-base lg:text-lg'>
              How to use ? →
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-5/12 flex items-center justify-center border-4 border-indigo-600  rounded-3xl">
          <img src={gif1} className="max-w-full h-auto" alt="gif" />
        </div>
      </main>
    </section>
  )
}

export default Welcome
