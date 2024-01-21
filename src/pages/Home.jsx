import { Link, Route, Routes, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Button from "../Components/pagesComponents/Button";
import Dropdown from "../Components/pagesComponents/Dropdown";
import '../index.css'
import Modals from "../Components/pagesComponents/Swap";
import Swap from "../Components/pagesComponents/Swap";
const Home = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      <div className="flex  home">
        {/* Sidebar */}

        <ul className="menu bg-base-200 rounded-box p-4 text-black h-screen overflow-y-scroll px-6  w-3/12 sticky top-0">
          <div className="bg-base-100 rounded-xl px-4   ">
            <li >
            <div className="relative  my-10 ">
                  <form>   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
              <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </div>
                  <input type="search" id="default-search" className=" p-3  pl-10 w-full text-sm text-gray-900 outline-none bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search ..."  />
              </div>
          </form>
            </div>
            </li>
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
                  <li>
                    <a>Accordion</a>
                  </li>
                  <li>
                    <a>Avatar</a>
                  </li>
                  <li>
                    <a>Badge</a>
                  </li>
                  <li>
                    <a>Card</a>
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

        <div className="flex-1  overflow-y-auto  py-20 px-10  ">
          
          <Routes>
            <Route path="Button" element={<Button />} />
            <Route path="/Dropdown" element={<Dropdown />} />
            <Route path="/Swap" element={<Swap />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
