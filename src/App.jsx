import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function App() {
  const jsxCode = '<div>Hello, <strong>world world!</strong></div>';
  return (
    <>
      <div className="container mx-auto my-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">JSX Code Viewer Example</h1>

      <SyntaxHighlighter language="jsx" style={a11yDark}>
      {jsxCode}
    </SyntaxHighlighter>

      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">JSX Output:</h2>

  
        <div dangerouslySetInnerHTML={{ __html: jsxCode }} />
      </div>
    </div>
    </>
  )
}

export default App
