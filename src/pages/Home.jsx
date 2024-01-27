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
import Welcome from "./welcom.jsx";
import Docs from "../Components/pagesComponents/Docs";

const Home = () => {
  const location = useLocation();
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

 
  

  return (
    <>
      <Header />

      <div className="flex gap-5 flex-col lg:flex col md:flex-row home pt-32">
        {/* Sidebar */}
        <ul className={`menu bg-base-400 col-4/6 text-black pt-20  h-full  block rounded-xl w-full md:w-3/12 ${location.pathname === '/' ? 'hidden ' : ''} lg:sticky top-2`}>
          <div className="bg-base-100  overflow-scroll  h-screen px-3 pt-10">

  
            <li className={` ${location.pathname === '/Docs' ? 'link text-white ' : ''}`}>
              <Link to='/Docs'>Docs</Link>
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
                  <li className={` ${location.pathname === '/Carousel' ? 'link text-white' : ''}`}>
                    <Link to='/Carousel' >Carousel</Link>
                  </li>
                  <li className={` ${location.pathname === '/Chat' ? 'link text-white' : ''}`}>
                    <Link to='/Chat' >Chat</Link>
                  </li>
                  <li className={` ${location.pathname === '/Collapse' ? 'link text-white' : ''}`}>
                    <Link to='/Collapse' >Collapse</Link>
                  </li>
               
                
                  <li className={` ${location.pathname === '/Kbd' ? 'link text-white' : ''}`}>
                    <Link to='/Kbd' >Kbd</Link>
                  </li>
                  <li className={` ${location.pathname === '/Stat' ? 'link text-white' : ''}`}>
                    <Link to='/Stat' >Stat</Link>
                  </li>
                  <li className={` ${location.pathname === '/Table' ? 'link text-white' : ''}`}>
                    <Link to='/Table' >Table</Link>
                  </li>
                  <li className={` ${location.pathname === '/Timeline' ? 'link text-white' : ''}`}>
                    <Link to='/Timeline' >Timeline</Link>
                  </li>
                </ul>
                <ul>
                  <li>Navigation</li>
                  <li className={` ${location.pathname === '/Breadcrumbs' ? 'link text-white' : ''}`}>
                    <Link to='/Breadcrumbs' >Breadcrumbs</Link>
                  </li>
                
                
                  <li className={` ${location.pathname === '/Menu' ? 'link text-white' : ''}`}>
                    <Link to='/Menu'>Menu</Link>
                  </li>
                  <li className={` ${location.pathname === '/Navbar' ? 'link text-white' : ''}`}>
                    <Link to='/Navbar'>Navbar</Link>
                  </li>
                  <li className={` ${location.pathname === '/Pagination' ? 'link text-white' : ''}`}>
                    <Link to='/Pagination'>Pagination</Link>
                  </li>
                  <li className={` ${location.pathname === '/Steps' ? 'link text-white' : ''}`}>
                    <Link to='/Steps'>Steps</Link>
                  </li>
                  <li className={` ${location.pathname === '/Tab' ? 'link text-white' : ''}`}>
                    <Link to='/Tab'>Tab</Link>
                  </li>
                </ul>
                <ul>
                  <li>Feedback</li>
                  <li className={` ${location.pathname === '/Alert' ? 'link text-white' : ''}`}>
                    <Link to='/Alert'>Alert</Link>
                  </li>
                  <li className={` ${location.pathname === '/Loading' ? 'link text-white' : ''}`}>
                    <Link to='/Loading'>Loading</Link>
                  </li>
                  <li className={` ${location.pathname === '/Progress' ? 'link text-white' : ''}`}>
                    <Link to='/Progress'>Progress</Link>
                  </li>
                 
                  <li className={` ${location.pathname === '/Skeleton' ? 'link text-white' : ''}`}>
                    <Link to='/Skeleton'>Skeleton</Link>
                  </li>
                  <li className={` ${location.pathname === '/Toast' ? 'link text-white' : ''}`}>
                    <Link to='/Toast'>Toast</Link>
                  </li>
                  <li className={` ${location.pathname === '/Tooltip' ? 'link text-white' : ''}`}>
                    <Link to='/Tooltip'>Tooltip</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </div>
        </ul>
        

        <div className="flex-1 col-2/6 overflow-y-auto py-10 px-4 md:px-10">
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
