import { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { FiCopy } from "react-icons/fi";
import { DropdownData ,DropOpenOrCloseData ,DropdownTopData} from "../../Data/DropdownData";
import { Link } from "react-router-dom";
const Dropdown = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(DropdownData);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };
  return (
    <>
      <h1 className="text-3xl font-bold pb-5">Dropdown</h1>
      <p className="text-gray-500 mb-10">
        Dropdown allow the user to take actions or make choices.
      </p>
      <p className="text-gray-700 mt-10 mb-10">
        To use the{" "}
        <Link to="/Dropdown" className="underline">
          Dropdown
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

      <div className="mockup-code">
        <pre data-prefix="$"><code>npm i daisyui</code></pre>
      </div>


      <p className="py-5 text-gray-600">
        2 Then add <a className="underline" href="https://daisyui.com">daisyUI</a> to your tailwind.config.js files:
      </p>

      <div className="mockup-code">
        <pre data-prefix="$"><code>{`module.exports = {
              //...
              plugins: [require("daisyui")],
            }`}</code></pre>
      </div>
  

      <p className="py-2 text-gray-400"># Dropdown</p>

      {DropdownData.map((Dropdown) => (
        <div key={Dropdown.id}>
          <div className="code-viewer">
            <div className="code-toolbar">
              <button
                className="copy-button"
                onClick={handleCopyClick}
                disabled={isCopied}
              >
                {isCopied ? "Copied!" : <FiCopy />}
              </button>
            </div>
            <LiveProvider code={Dropdown.code}>
              <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
              <LiveError />
              <LivePreview className="py-6 mb-20" />
            </LiveProvider>
          </div>
        </div>
      ))}
      <p className="py-2 text-gray-400"># Toggle Dropdown</p>

      {DropOpenOrCloseData.map((DropOpenOrClose) => (
        <div key={DropOpenOrClose.id}>
          <div className="code-viewer">
            <div className="code-toolbar">
              <button
                className="copy-button"
                onClick={DropOpenOrClose}
                disabled={isCopied}
              >
                {isCopied ? "Copied!" : <FiCopy />}
              </button>
            </div>
            <LiveProvider code={DropOpenOrClose.code}>
              <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
              <LiveError />
              <LivePreview className="py-6 mb-20" />
            </LiveProvider>
          </div>
        </div>
      ))}
      <p className="py-2 text-gray-400"># Toggle Dropdown</p>

      {DropdownTopData.map((DropTop) => (
        <div key={DropTop.id}>
          <div className="code-viewer">
            <div className="code-toolbar">
              <button
                className="copy-button"
                onClick={DropTop}
                disabled={isCopied}
              >
                {isCopied ? "Copied!" : <FiCopy />}
              </button>
            </div>
            <LiveProvider code={DropTop.code}>
              <LiveEditor className="border border-gray-900  rounded-xl mb-4 overflow-hidden" />
              <LiveError />
              <LivePreview className="py-6 mb-20"  />
            </LiveProvider>
          </div>
        </div>
      ))}

      <div className="flex justify-between items-center py-10 px-5">
        <Link to='/Button' className="border px-20 py-2 rounded-xl font-semibold hover:scale-105  bg-white text-black">
          Previous
        </Link>
        <Link to='/Swap' className="border px-20 py-2 rounded-xl font-semibold hover:scale-105 bg-black text-white">
          Next
        </Link>
      </div>
    </>
  );
};

export default Dropdown;
