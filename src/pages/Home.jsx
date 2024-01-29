import { Link, Route, Routes, useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Button from "../Components/pagesComponents/Button";
import Dropdown from "../Components/pagesComponents/Dropdown";
import '../index.css'
import Swap from "../Components/pagesComponents/Swap";
import Components from "../Components/Components";
import Avatar from "../Components/pagesComponents/Avatar";
import Accordion from "../Components/pagesComponents/Accordion";
import Badge from "../Components/pagesComponents/Badge";
import Card from "../Components/pagesComponents/Card";
import Carousel from "../Components/pagesComponents/Carousel";
import Chat from "../Components/pagesComponents/Chat";
import Collapse from "../Components/pagesComponents/Collapse";
import Kbd from "../Components/pagesComponents/Kbd";
import Stat from "../Components/pagesComponents/Stat";
import Table from "../Components/pagesComponents/Table";
import Timeline from "../Components/pagesComponents/Timeline";
import Breadcrumbs from "../Components/pagesComponents/Breadcrumbs";
import Menu from "../Components/pagesComponents/Menu";
import Navbar from "../Components/pagesComponents/Navbar";
import Pagination from "../Components/pagesComponents/Pagination";
import Steps from "../Components/pagesComponents/Steps";
import Tab from "../Components/pagesComponents/Tab";
import Alert from "../Components/pagesComponents/Alert";
import Loading from "../Components/pagesComponents/Loading";
import Progress from "../Components/pagesComponents/Progress";
import Skeleton from "../Components/pagesComponents/Skelton";
import Toast from "../Components/pagesComponents/Toast";
import Tooltip from "../Components/pagesComponents/Tooltip";
import Headers from "../Components/CompleteComponents/Headers";
import Footer from "../Components/CompleteComponents/Footer";
import React, { useEffect, useState } from 'react';
import Docs from "../Components/pagesComponents/Docs";
import Welcome from "./Welcome";

const Home = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const routes = [
    { path: "/", element: <Welcome /> },
    { path: "/headers", element: <Headers /> },
    { path: "/footer", element: <Footer /> },
    { path: "/components", element: <Components /> },
    { path: "/Button", element: <Button /> },
    { path: "/Dropdown", element: <Dropdown /> },
    { path: "/Swap", element: <Swap /> },
    { path: "/Avatar", element: <Avatar /> },
    { path: "/Accordion", element: <Accordion /> },
    { path: "/Badge", element: <Badge /> },
    { path: "/Card", element: <Card /> },
    { path: "/Carousel", element: <Carousel /> },
    { path: "/Chat", element: <Chat /> },
    { path: "/Collapse", element: <Collapse /> },
    { path: "/Kbd", element: <Kbd /> },
    { path: "/Stat", element: <Stat /> },
    { path: "/Table", element: <Table /> },
    { path: "/Timeline", element: <Timeline /> },
    { path: "/Breadcrumbs", element: <Breadcrumbs /> },
    { path: "/Menu", element: <Menu /> },
    { path: "/Navbar", element: <Navbar /> },
    { path: "/Pagination", element: <Pagination /> },
    { path: "/Steps", element: <Steps /> },
    { path: "/Tab", element: <Tab /> },
    { path: "/Alert", element: <Alert /> },
    { path: "/Loading", element: <Loading /> },
    { path: "/Progress", element: <Progress /> },
    { path: "/Skeleton", element: <Skeleton /> },
    { path: "/Toast", element: <Toast /> },
    { path: "/Tooltip", element: <Tooltip /> },
    { path: "/Docs", element: <Docs /> },
  ];

  

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    // Close the sidebar if the location is '/'
    if (location.pathname === '/') {
      setSidebarOpen(false);
    }
  }, [location.pathname]);
  return (
    <>
     
           <Header toggleSidebar={toggleSidebar}/>
     
      <div className="flex gap-5 flex-col lg:flex col md:flex-row home  pt-32">
        {/* Sidebar */}
  
        <ul className={`menu  bg-base-400   col-4/6 text-black   h-full  block rounded-xl w-full md:w-3/12 ${location.pathname === '/' ? 'md:hidden'  : ''} lg:sticky top-2 ${sidebarOpen ? 'block' : 'hidden  md:flex '}`}>
          <div className="bg-base-100 dark:text-gray-400  overflow-scroll  h-screen px-3 pt-10">

  
            <li className={` ${location.pathname === '/Docs' ? 'link text-white ' : ''}`}>
              <Link to='/Docs' onClick={closeSidebar}>Docs</Link>
            </li>
          
            <li>
              <details open>
                <summary className="font-bold">Components</summary>
                <li className="flex  gap-1">
                  {" "}
                  <span className="font-bold">Actions</span>
                </li>
                <ul>
                  <li className={` ${location.pathname === '/Button' ? 'link text-white' : ''}`}>
                    <Link to='/Button' onClick={closeSidebar}>Button</Link>
                  </li>
                  <li className={` ${location.pathname === '/Dropdown' ? 'link text-white' : ''}`}>
                    <Link to='/Dropdown' onClick={closeSidebar}>Dropdown</Link>
                  </li>
                  {/* <li className={` ${location.pathname === '/Modals' ? 'link text-white' : ''}`}>
                    <Link to='/Modals'>Modal</Link>
                  </li> */}
                  <li className={` ${location.pathname === '/Swap' ? 'link text-white' : ''}`}>
                    <Link to='/Swap'onClick={closeSidebar}>Swap</Link>
                  </li>
                  <li>
                    <a>Theme controller</a>
                  </li>
                </ul>
                <ul>
                  <li className="font-bold">Data display</li>
                  <li className={` ${location.pathname === '/Accordion' ? 'link text-white' : ''}`}>
                    <Link to='/Accordion' onClick={closeSidebar}>Accordion</Link>
                  </li>
                  <li className={` ${location.pathname === '/Avatar' ? 'link text-white' : ''}`}>
                    <Link to='/Avatar'onClick={closeSidebar} >Avatar</Link>
                  </li>
                  <li className={` ${location.pathname === '/Badge' ? 'link text-white' : ''}`}>
                    <Link to='/Badge' onClick={closeSidebar}>Badge</Link>
                  </li>
                  <li className={` ${location.pathname === '/Card' ? 'link text-white' : ''}`}>
                    <Link to='/Card' onClick={closeSidebar}>Card</Link>
                  </li>
                  <li className={` ${location.pathname === '/Carousel' ? 'link text-white' : ''}`}>
                    <Link to='/Carousel' onClick={closeSidebar}>Carousel</Link>
                  </li>
                  <li className={` ${location.pathname === '/Chat' ? 'link text-white' : ''}`}>
                    <Link to='/Chat' onClick={closeSidebar}>Chat</Link>
                  </li>
                  <li className={` ${location.pathname === '/Collapse' ? 'link text-white' : ''}`}>
                    <Link to='/Collapse'onClick={closeSidebar} >Collapse</Link>
                  </li>
               
                
                  <li className={` ${location.pathname === '/Kbd' ? 'link text-white' : ''}`}>
                    <Link to='/Kbd' onClick={closeSidebar}>Kbd</Link>
                  </li>
                  <li className={` ${location.pathname === '/Stat' ? 'link text-white' : ''}`}>
                    <Link to='/Stat'onClick={closeSidebar} >Stat</Link>
                  </li>
                  <li className={` ${location.pathname === '/Table' ? 'link text-white' : ''}`}>
                    <Link to='/Table'onClick={closeSidebar} >Table</Link>
                  </li>
                  <li className={` ${location.pathname === '/Timeline' ? 'link text-white' : ''}`}>
                    <Link to='/Timeline' onClick={closeSidebar}>Timeline</Link>
                  </li>
                </ul>
                <ul>
                  <li className="font-bold">Navigation</li>
                  <li className={` ${location.pathname === '/Breadcrumbs' ? 'link text-white' : ''}`}>
                    <Link to='/Breadcrumbs' onClick={closeSidebar}>Breadcrumbs</Link>
                  </li>
                
                
                  <li className={` ${location.pathname === '/Menu' ? 'link text-white' : ''}`}>
                    <Link to='/Menu'onClick={closeSidebar}>Menu</Link>
                  </li>
                  <li className={` ${location.pathname === '/Navbar' ? 'link text-white' : ''}`}>
                    <Link to='/Navbar'onClick={closeSidebar}>Navbar</Link>
                  </li>
                  <li className={` ${location.pathname === '/Pagination' ? 'link text-white' : ''}`}>
                    <Link to='/Pagination'onClick={closeSidebar}>Pagination</Link>
                  </li>
                  <li className={` ${location.pathname === '/Steps' ? 'link text-white' : ''}`}>
                    <Link to='/Steps'onClick={closeSidebar}>Steps</Link>
                  </li>
                  <li className={` ${location.pathname === '/Tab' ? 'link text-white' : ''}`}>
                    <Link to='/Tab'onClick={closeSidebar}>Tab</Link>
                  </li>
                </ul>
                <ul>
                  <li className="font-bold">Feedback</li>
                  <li className={` ${location.pathname === '/Alert' ? 'link text-white' : ''}`}>
                    <Link to='/Alert'onClick={closeSidebar}>Alert</Link>
                  </li>
                  <li className={` ${location.pathname === '/Loading' ? 'link text-white' : ''}`}>
                    <Link to='/Loading'onClick={closeSidebar}>Loading</Link>
                  </li>
                  <li className={` ${location.pathname === '/Progress' ? 'link text-white' : ''}`}>
                    <Link to='/Progress'onClick={closeSidebar}>Progress</Link>
                  </li>
                 
                  <li className={` ${location.pathname === '/Skeleton' ? 'link text-white' : ''}`}>
                    <Link to='/Skeleton'onClick={closeSidebar}>Skeleton</Link>
                  </li>
                  <li className={` ${location.pathname === '/Toast' ? 'link text-white' : ''}`}>
                    <Link to='/Toast'onClick={closeSidebar}>Toast</Link>
                  </li>
                  <li className={` ${location.pathname === '/Tooltip' ? 'link text-white' : ''}`}>
                    <Link to='/Tooltip'onClick={closeSidebar}>Tooltip</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="font-bold">Item 3 (soon)</a>
            </li>
          </div>
        </ul>
          

                    <div className="flex-1 col-2/6  overflow-y-auto px-4 md:px-10">
                    <Routes>

                      {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          {/**    
             <Route path="/Toast" element={<Toast />} />
             <Route path="/Tooltip" element={<Tooltip />} />*/}
          </Routes> 
        </div>
      </div>
      
    </>
  );
};

export default Home;
