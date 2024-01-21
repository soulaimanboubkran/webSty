
export const DropdownData = [
  {
    id: 1,
    code: `
      <div className="dropdown ">
        <div tabIndex={0} role="button" className="btn m-1 px-20 bg-blue-700 text-white hover:bg-blue-800">Click</div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
        </ul>
      </div>
      `,
  },
];
export const DropOpenOrCloseData = [
  {
    id: 1,
    code: `
        <details className="dropdown">
            <summary className="m-1 btn px-20 bg-blue-700 text-white hover:bg-blue-800">open or close</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </details>
      `,
  },
];
export const DropdownTopData = [
  {
    id: 1,
    code: `
        <div className="dropdown dropdown-top">
            <div tabIndex={0} role="button" className="btn m-1 px-20 bg-blue-700 text-white hover:bg-blue-800">Click</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
            </ul>
        </div>
      `,
  },
];
