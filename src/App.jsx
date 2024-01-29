import Home from "./pages/Home"
import Footer from "./Components/Footer"

const App = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Home />
      </div>
      <Footer />
    </div>
    </>
  )
}

export default App













// import  { useState } from 'react';
// import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
// import { FiCopy } from 'react-icons/fi'; // You can use any icon library

// const CodeViewer = ({ code }) => {
//   const [isCopied, setIsCopied] = useState(false);

//   const handleCopyClick = () => {
//     navigator.clipboard.writeText(code);
//     setIsCopied(true);
//     setTimeout(() => setIsCopied(false), 1500);
//   };
 

//   return (
//     <div className="code-viewer">
//       <div className="code-toolbar">
//         <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
//           {isCopied ? 'Copied!' : <FiCopy />}
//         </button>
//       </div>
//       <LiveProvider    code={code}>
//         <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
//         <LiveError />
//         <LivePreview  className='bg-green-200' />
//       </LiveProvider>
//     </div>
//   );
// };

// function App() {
//   const jsxCodeArray = [
//     {
//       id: 1,
//       code: `<div>Hello, <strong>world!</strong></div>`,
//     },
//     {
//       id: 2,
//       code: `<h1>React Code Viewer</h1>`,
//     },
//     {
//       id: 3,
//       code: `
//         <div>
//           <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={() => alert("Button clicked!")}>
//             Click me
//           </button>
//         </div>
//       `,
//     },
//     // Add more JSX code snippets as needed
//   ];

//   return (
//     <div className="container mx-auto my-8 max-w-2xl">
//       <h1 className="text-3xl font-bold mb-4">JSX Code Viewer Example</h1>

//       {jsxCodeArray.map((jsxObject) => (
//         <div key={jsxObject.id} className="mt-4">
//           <h2 className="text-xl font-bold mb-2">JSX Output {jsxObject.id}:</h2>

//           {/* Use custom CodeViewer component */}
//           <CodeViewer code={jsxObject.code} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
