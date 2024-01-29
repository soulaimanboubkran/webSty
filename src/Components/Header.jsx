
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Header = () => {
    const [search ,setSearch] = useState('')
    const [text , setText] = useState(false)
    const [filteredRoutes, setFilteredRoutes] = useState([]);
    const routes = [

        { path: "Headers"},
        { path: "Footer" },
        { path: "components" },
        { path: "Button" },
        { path: "Dropdown" },
        { path: "Swap" },
        { path: "Avatar" },
        { path: "Accordion" },
        { path: "Badge"},
        { path: "Card" },
        { path: "Carousel" },
        { path: "Chat" },
        { path: "Collapse" },
        { path: "Kbd" },
        { path: "Stat" },
        { path: "Table" },
        { path: "Timeline"},
        { path: "Breadcrumbs" },
        { path: "Menu"},
        { path: "Navbar" },
        { path: "Pagination" },
        { path: "Steps" },
        { path: "Tab" },
        { path: "Alert" },
        { path: "Loading" },
        { path: "Progress" },
        { path: "Skeleton" },
        { path: "Toast" },
        { path: "Tooltip" },
      ];
    const navigate = useNavigate()

    useEffect(()=>{
        if(search !==''){
            setText(true)
        }else{
            setText(false)
        }
    },[search])
    
    useEffect(() => {
        // Filter routes based on the search value
        const filteredRoutesResult = routes.filter((item) =>
          item.path.toLowerCase().includes(search.toLowerCase())
        );
      
        // Update state with filtered routes
        setFilteredRoutes(filteredRoutesResult);
      
        // Navigate to the first matching route or show a message if no match is found
        
      }, [search]);

  return (
    <>
      <header className='mb-4'>
        <nav className="bg-white py-5 fixed z-[99999999999]  w-full border-gray-200 px-4 lg:px-6 dark:bg-gray-800">
          <div className="flex lg:flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img src={logo} className="mr-3 h-8 sm:h-9" alt="Logo" />
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="#"
                className="text-white bg-blue-600 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="justify-between items-center w-full flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <div className="relative">
                <form className="flex gap-1 bg-gray-50">
  <input
    type="text"
   
    placeholder="Search"
  
    onChange={(e) => setSearch(e.target.value)}
    className="border px-5 py-2 rounded-lg lg:w-[400px]"
  />
  <button
    type="submit"
    disabled
    className="px-4 py-2 border rounded-lg bg-blue-700 text-white"
    onClick={(e) => e.preventDefault()} // Prevents the form from submitting
  >
    <CiSearch className='text-xl font-bold' />
  </button>
</form>

<div className={`bg-gray-50 flex flex-col absolute w-full  px-4 py-2 ${text ? 'flex' : 'hidden'}`}>
  {filteredRoutes.map((item, index) => (
    <Link
      key={index}
      onClick={()=>setText(false)}
      className="py-1 hover px-4 rounded-xl text-black hover:bg-gray-200"
      to={`/${item.path}`}
    >
      {item.path}
    </Link>
  ))}
</div>

                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header