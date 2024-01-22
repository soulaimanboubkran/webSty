
import { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { FiCopy } from 'react-icons/fi';
import { accordion } from '../../Data/Accordion';


const Accordion = () => {
    const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = (code) => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  }
  return (
    <>
      <h1 className="text-3xl font-bold pb-5">Accordion</h1>
      {accordion.map((item) => (
        <div key={item.id} >
        
  
          <p className=" pt-7 text-gray-400"># {item.title}</p>
  
          <div className="code-viewer">
            <div className="code-toolbar">
              <button
                className="copy-button"
                onClick={() => handleCopyClick(item.code)}
                disabled={isCopied}
              >
                {isCopied ? 'Copied!' : <FiCopy />}
              </button>
            </div>
            <LiveProvider code={item.code}>
              <LiveEditor className="border border-gray-900 rounded-xl mb-4 overflow-hidden" />
              <LiveError />
              <div className="grid">
                <div className="tabs tabs-lifted z-10 -mb-[var(--tab-border)] justify-self-start">
                  <button className="tab tab-active [--tab-bg:var(--fallback-b1,oklch(var(--b1)))]">
                    Preview
                  </button>
                 
                  <div className="tab [--tab-border-color:transparent]"></div>
                </div>
                  <div className="preview border-base-300  bg-base-100 rounded-b-box rounded-se-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden bg-cover bg-top p-4 [border-width:var(--tab-border)] undefined">
                    <LivePreview className=''/>
                </div>
              </div>
            </LiveProvider>
          </div>
        </div>
      ))}
    </>
  );
  
      }

export default Accordion 
