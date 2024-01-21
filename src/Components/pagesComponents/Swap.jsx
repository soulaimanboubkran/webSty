import { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { FiCopy } from "react-icons/fi";
import { SwapData ,SwapData2 ,SwapData3 ,SwapData4,SwapData5} from "../../Data/SwapData";
import { Link } from "react-router-dom";
const Swap = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(SwapData);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };
  return (
    <>
      <h1 className="text-3xl font-bold pb-5">Swap</h1>
      <p className="text-gray-500 mb-10">
      Modals allow the user to take actions or make choices.
      </p>
      <p className="text-gray-700 mt-10 mb-10">
        To use the{" "}
        <Link to="/Swap" className="underline">
        Swap
        </Link>
        , you need to install some configurations in your project.
      </p>

      <p className="py-5 text-gray-600">
        You need{" "}
        <a className="underline" href="https://nodejs.org/en/download/">
          Node.js
        </a>{" "}
        and{" "}
        <a href="https://tailwindui.com/" className="underline ">
          Tailwind CSS
        </a>{" "}
        installed.
      </p>
      <p className="py-5 text-gray-600">1 Install <a className="underline" href="https://daisyui.com">daisyUI</a> :</p>

      <LiveProvider code={`npm i -D daisyui@latest`}>
        <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
        
        <LivePreview className="py-6" />
      </LiveProvider>
  

      <p className="py-5 text-gray-600">
        2 Then add <a className="underline" href="https://daisyui.com">daisyUI</a> to your tailwind.config.js files:
      </p>

      <LiveProvider code={`module.exports = {
              //...
              plugins: [require("daisyui")],
            }`}>
        <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
        
        <LivePreview className="py-6" />
      </LiveProvider>

      <p className="py-2 text-gray-400"># Swap text</p>

      {SwapData.map((Swap) => (
  <div key={Swap.id}>
    <div className="code-viewer">
      <div className="code-toolbar">
        <button
          className="copy-button"
          onClick={handleCopyClick}
          disabled={isCopied}
        >
          {isCopied ? "Copied!" : <FiCopy />}
        </button>
        <button
          className="open-modal-button"
          onClick={Swap.openModal}
        >
          Open Modal
        </button>
      </div>
      <LiveProvider code={Swap.code}>
        <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
        <LiveError />
        <LivePreview className="py-6 mb-20"  />
      </LiveProvider>
    </div>
  </div>
))}

      <p className="py-2 text-gray-400"># Toggle Dropdown</p>

      {SwapData2.map((swap2) => (
        <div key={swap2.id}>
          <div className="code-viewer">
            <div className="code-toolbar">
              <button
                className="copy-button"
                
                disabled={isCopied}
              >
                {isCopied ? "Copied!" : <FiCopy />}
              </button>
            </div>
            <LiveProvider code={swap2.code}>
              <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
              <LiveError />
              <LivePreview className="py-6 mb-20" />
            </LiveProvider>
          </div>
        </div>
      ))}
      <p className="py-2 text-gray-400"># Toggle Dropdown</p>

      {SwapData3.map((swap3) => (
        <div key={swap3.id}>
          <div className="code-viewer">
            <div className="code-toolbar">
              <button
                className="copy-button"
                onClick={swap3}
                disabled={isCopied}
              >
                {isCopied ? "Copied!" : <FiCopy />}
              </button>
            </div>
            <LiveProvider code={swap3.code}>
              <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
              <LiveError />
              <LivePreview className="py-6 mb-20"  />
            </LiveProvider>
          </div>
        </div>
      ))}
      <p className="py-2 text-gray-400"># Toggle Dropdown</p>

      {SwapData4.map((swap4) => (
        <div key={swap4.id}>
          <div className="code-viewer">
            <div className="code-toolbar">
              <button
                className="copy-button"
                onClick={swap4}
                disabled={isCopied}
              >
                {isCopied ? "Copied!" : <FiCopy />}
              </button>
            </div>
            <LiveProvider code={swap4.code}>
              <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
              <LiveError />
              <LivePreview className="py-6 mb-20"  />
            </LiveProvider>
          </div>
        </div>
      ))}
      <p className="py-2 text-gray-400"># Toggle Dropdown</p>

      {SwapData5.map((swap5) => (
        <div key={swap5.id}>
          <div className="code-viewer">
            <div className="code-toolbar">
              <button
                className="copy-button"
                onClick={swap5}
                disabled={isCopied}
              >
                {isCopied ? "Copied!" : <FiCopy />}
              </button>
            </div>
            <LiveProvider code={swap5.code}>
              <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
              <LiveError />
              <LivePreview className="py-6 mb-20"  />
            </LiveProvider>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center py-10 px-5">
        <Link to='/Dropdown' className="border px-20 py-2 rounded-xl font-semibold hover:scale-105  bg-white text-black">
          Previous
        </Link>
        <Link to='/ThemeController' className="border px-20 py-2 rounded-xl font-semibold hover:scale-105 bg-black text-white">
          Next
        </Link>
      </div>
    </>
  );
};

export default Swap;
