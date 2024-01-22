import { Link, Route, Routes, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Button from "../Components/pagesComponents/Button";
import Dropdown from "../Components/pagesComponents/Dropdown";
import '../index.css'
import Modals from "../Components/pagesComponents/Swap";
import Swap from "../Components/pagesComponents/Swap";
import Welcom from "./welcom";
import Components from "../Components/Components";
import Avatar from "../Components/pagesComponents/Avatar";
import Accordion from "../Components/pagesComponents/Accordion";
import Badge from "../Components/pagesComponents/Badge";
import Card from "../Components/pagesComponents/Card";


const Home = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      <div className="flex flex-col md:flex-row home">
        {/* Sidebar */}
        <ul className={` menu bg-white rounded-box text-black h-screen  w-full md:w-3/12  ${location.pathname === '/' ? 'hidden' : ''}   sticky top-0`}>
      
        <div className="bg-base-100 rounded-xl px-3">
        
        

            <div className="relative  mt-20">
              <form className="">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" className="p-3 pl-10 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..." />
                </div>
              </form>
            </div>
  
            <li>
              <Link>Docs</Link>
            </li>
            <li>
              <Link>Install</Link>
            </li>
            <li>
              <details open>
                <summary>Components</summary>
                <li className="flex  gap-1">
                  {" "}
                  <span>Actions</span>
                </li>
                <ul>
                  <li className={` ${location.pathname === '/Button' ? 'link text-white' : ''}`}>
                    <Link to='/Button' >Button</Link>
                  </li>
                  <li className={` ${location.pathname === '/Dropdown' ? 'link text-white' : ''}`}>
                    <Link to='/Dropdown' >Dropdown</Link>
                  </li>
                  {/* <li className={` ${location.pathname === '/Modals' ? 'link text-white' : ''}`}>
                    <Link to='/Modals'>Modal</Link>
                  </li> */}
                  <li className={` ${location.pathname === '/Swap' ? 'link text-white' : ''}`}>
                    <Link to='/Swap'>Swap</Link>
                  </li>
                  <li>
                    <a>Theme controller</a>
                  </li>
                </ul>
                <ul>
                  <li>Data display</li>
                  <li className={` ${location.pathname === '/Accordion' ? 'link text-white' : ''}`}>
                    <Link to='/Accordion' >Accordion</Link>
                  </li>
                  <li className={` ${location.pathname === '/Avatar' ? 'link text-white' : ''}`}>
                    <Link to='/Avatar' >Avatar</Link>
                  </li>
                  <li className={` ${location.pathname === '/Badge' ? 'link text-white' : ''}`}>
                    <Link to='/Badge' >Badge</Link>
                  </li>
                  <li className={` ${location.pathname === '/Card' ? 'link text-white' : ''}`}>
                    <Link to='/Card' >Card</Link>
                  </li>
                  <li>
                    <a>Carousel</a>
                  </li>
                  <li>
                    <a>Chat bubble</a>
                  </li>
                  <li>
                    <a>Collapse</a>
                  </li>
                  <li>
                    <a>Countdown</a>
                  </li>
                  <li>
                    <a>Diff</a>
                  </li>
                  <li>
                    <a>Kbd</a>
                  </li>
                  <li>
                    <a>Table</a>
                  </li>
                  <li>
                    <a>Stat</a>
                  </li>
                  <li>
                    <a>Timeline</a>
                  </li>
                </ul>
                <ul>
                  <li>Navigation</li>
                  <li>
                    <a>Breadcrumbs</a>
                  </li>
                  <li>
                    <a>Bottom navigation</a>
                  </li>
                  <li>
                    <a>Link</a>
                  </li>
                  <li>
                    <a>Menu</a>
                  </li>
                  <li>
                    <a>Navbar</a>
                  </li>
                  <li>
                    <a>Pagination</a>
                  </li>
                  <li>
                    <a>Steps</a>
                  </li>
                  <li>
                    <a>Tab</a>
                  </li>
                </ul>
                <ul>
                  <li>Feedback</li>
                  <li>
                    <Link>Alert</Link>
                  </li>
                  <li>
                    <Link>Loading</Link>
                  </li>
                  <li>
                    <Link>Progress</Link>
                  </li>
                  <li>
                    <Link>Radial Progress</Link>
                  </li>
                  <li>
                    <Link>Skelton</Link>
                  </li>
                  <li>
                    <Link>Toast</Link>
                  </li>
                  <li>
                    <Link>Tooltip</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </div>
        </ul>
        

        <div className="flex-1 overflow-y-auto py-10 px-4 md:px-10">
          <Routes>
            <Route path="/" element={<Welcom />} />
            
            <Route path="/components" element={<Components />} />
            <Route path="/Button" element={<Button />} />
            <Route path="/Dropdown" element={<Dropdown />} />
            <Route path="/Swap" element={<Swap />} />
            <Route path="/Avatar" element={<Avatar />} />
            <Route path="/Accordion" element={<Accordion />} />
            <Route path="/Badge" element={<Badge />} />
            <Route path="/Card" element={<Card />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
