
import { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { buttonsData ,buttonsOutlineData,buttonsLoadingData ,buttonsRoundedeData, buttonsBlockData,buttonsIconData ,buttonsGroupData ,buttonsCircleData} from '../../Data/buttonData';
import { FiCopy } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Button = () => {
    const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(buttonsData);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };
  return (
    <>
    <h1 className="text-3xl font-bold pb-5">Button</h1>
          <p className="text-gray-500 mb-10">
            Buttons allow the user to take actions or make choices.
          </p>

        <p className='py-2 text-gray-400'>
        # Button
        </p>


    {
        buttonsData.map((buttondata)=>(
           <div key={buttondata.id}>
             <div className="code-viewer">
            <div className="code-toolbar">
              <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider    code={buttondata.code}>
              <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
              <LiveError />
              <LivePreview className='py-6' />
            </LiveProvider>
          </div>
           </div>
        ))
    }
      
      <p className='py-2 mt-10 text-gray-400'>
        # Outline buttons
        </p>

        {
        buttonsOutlineData.map((buttonOutlineData)=>(
           <div key={buttonOutlineData.id}>
             <div className="code-viewer">
            <div className="code-toolbar">
              <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider    code={buttonOutlineData.code}>
              <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
              <LiveError />
              <LivePreview className='py-6' />
            </LiveProvider>
          </div>
           </div>
        ))
    }
      <p className='py-2 mt-10 text-gray-400'>
        # Rounded button
        </p>

        {
        buttonsRoundedeData.map((buttonRoundedeData)=>(
           <div key={buttonRoundedeData.id}>
             <div className="code-viewer">
            <div className="code-toolbar">
              <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider    code={buttonRoundedeData.code}>
              <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
              <LiveError />
              <LivePreview className='py-6' />
            </LiveProvider>
          </div>
           </div>
        ))
    }
      <p className='py-2 mt-10 text-gray-400'>
        # Icon button
        </p>

        {
        buttonsIconData.map((buttonIconData)=>(
           <div key={buttonIconData.id}>
             <div className="code-viewer">
            <div className="code-toolbar">
              <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider   code={buttonIconData.code}>
              <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
              <LiveError />
              <LivePreview className='py-6' />
            </LiveProvider>
          </div>
           </div>
        ))
    }
      <p className='py-2 mt-10 text-gray-400'>
        # Loading button
        </p>

        {
        buttonsLoadingData.map((buttonLoadingData)=>(
           <div key={buttonLoadingData.id}>
             <div className="code-viewer">
            <div className="code-toolbar">
              <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider   code={buttonLoadingData.code}>
              <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
              <LiveError />
              <LivePreview className='py-6' />
            </LiveProvider>
          </div>
           </div>
        ))
    }
      <p className='py-2 mt-10 text-gray-400'>
        # Group button
        </p>

        {
        buttonsGroupData.map((buttonGroupData)=>(
           <div key={buttonGroupData.id}>
             <div className="code-viewer">
            <div className="code-toolbar">
              <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider   code={buttonGroupData.code}>
              <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
              <LiveError />
              <LivePreview className='py-6' />
            </LiveProvider>
          </div>
           </div>
        ))
    }
      <p className='py-2 mt-10 text-gray-400'>
        # Circle button
        </p>

        {
        buttonsCircleData.map((buttonCircleData)=>(
           <div key={buttonCircleData.id}>
             <div className="code-viewer">
            <div className="code-toolbar">
              <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider   code={buttonCircleData.code}>
              <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
              <LiveError />
              <LivePreview className='py-6' />
            </LiveProvider>
          </div>
           </div>
        ))
    }
      <p className='py-2 mt-10 text-gray-400'>
        # Group button
        </p>

        {
        buttonsGroupData.map((buttonGroupData)=>(
           <div key={buttonGroupData.id}>
             <div className="code-viewer">
            <div className="code-toolbar">
              <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider   code={buttonGroupData.code}>
              <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
              <LiveError />
              <LivePreview className='py-6' />
            </LiveProvider>
          </div>
           </div>
        ))
    }
      <p className='py-2 mt-10 text-gray-400'>
        # Block button
        </p>

        {
        buttonsBlockData.map((buttonBlockData)=>(
           <div key={buttonBlockData.id}>
             <div className="code-viewer">
            <div className="code-toolbar">
              <button className="copy-button" onClick={handleCopyClick} disabled={isCopied}>
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider   code={buttonBlockData.code}>
              <LiveEditor   className="border border-gray-900  rounded-xl mb-4 overflow-hidden"/>
              <LiveError />
              <LivePreview className='py-6' />
            </LiveProvider>
          </div>
           </div>
        ))
    }
    
    <div className='flex justify-between items-center py-10 px-5'>
        <Link to='/Dropdown' className='  border px-20 py-2 rounded-xl font-semibold hover:scale-105 bg-black text-white'>Next</Link>
    </div>
    </>
  )
}

export default Button