export const pagination =[
    {id:1,
    title:"Pagination with an active button",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="join">
          <button className="join-item btn btn-xs">1</button>
          <button className="join-item btn btn-xs btn-active">2</button>
          <button className="join-item btn btn-xs">3</button>
          <button className="join-item btn btn-xs">4</button>
        </div>
        <div className="join">
          <button className="join-item btn btn-sm">1</button>
          <button className="join-item btn btn-sm btn-active">2</button>
          <button className="join-item btn btn-sm">3</button>
          <button className="join-item btn btn-sm">4</button>
        </div>
        <div className="join">
          <button className="join-item btn btn-md">1</button>
          <button className="join-item btn btn-md btn-active">2</button>
          <button className="join-item btn btn-md">3</button>
          <button className="join-item btn btn-md">4</button>
        </div>
        <div className="join">
          <button className="join-item btn btn-lg">1</button>
          <button className="join-item btn btn-lg btn-active">2</button>
          <button className="join-item btn btn-lg">3</button>
          <button className="join-item btn btn-lg">4</button>
        </div>
    </div>
    `,

},{id:2,
    title:"With a disabled button",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn">2</button>
          <button className="join-item btn btn-disabled">...</button>
          <button className="join-item btn">99</button>
          <button className="join-item btn">100</button>
        </div>
    </div>
    `,

},{id:3,
    title:"Extra small buttons",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="join">
          <button className="join-item btn">«</button>
          <button className="join-item btn">Page 22</button>
          <button className="join-item btn">»</button>
        </div>
    </div>
    `,

},{id:4,
    title:"Nex/Prev outline buttons with equal width",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="join grid grid-cols-2">
          <button className="join-item btn btn-outline">Previous page</button>
          <button className="join-item btn btn-outline">Next</button>
        </div>
    </div>
    `,

},{id:5,
    title:"Using radio inputs",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="join">
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
          <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
        </div>
    </div>
    `,

}
]