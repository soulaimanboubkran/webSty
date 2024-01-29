
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";

const Header = ({toggleSidebar}) => {

  
 
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



        <nav className="bg-white py-5    w-full border-gray-200 px-4 lg:px-6 dark:bg-gray-800">
          <div className="flex lg:flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            
                <a href="/" className="flex items-center">
                  <img src={logo} className="mr-3 h-8 sm:h-9" alt="Logo" />
                </a>

                <div className="flex  items-center lg:order-2">
                 
                               <div className="navbar-end  ">
                 <Link to={'/components'} className="btn rounded-xl">components</Link> 

                        </div>

                    
<button className="md:hidden block ml-7 btn  text-white px-2 py-2 rounded-xl" onClick={toggleSidebar}>
                                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 font-bold  h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                      </svg>

                         </button>
                 
                </div>




            <div id="mobile-menu-2" className="justify-between items-center   w-full flex lg:w-auto lg:order-1">
              <ul className="flex flex-col sm:w-full mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <div className="flex  ">
                   <form className="flex gap-1 ">
                     <input
                       type="text"

                       placeholder="Search"

                       onChange={(e) => setSearch(e.target.value)}
                       className="border px-5 py-2 rounded-xl lg:w-[400px]"
                     />
                     <button
                       type="submit"
                       disabled
                       className="px-4 py-2 border rounded-xl bg-blue-700 text-white"
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