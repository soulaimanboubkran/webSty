const avatar = [
    {
      id: 1,
      title:"Avatar",
      code: `
        <div className="flex gap-1">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 2,
      title:"Avatar in custom sizes",
      code: `
        <div className=" flex  flex-wrap items-center justify-center gap-2 overflow-x-hidden ">
          <div className="avatar ">
            <div className="w-32 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar ">
            <div className="w-20 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <div className="avatar ">
            <div className="w-16 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <div className="avatar ">
            <div className="w-8 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 3,
      title:"Avatar rounded",
      code: `
        <div className="flex  flex-wrap items-center justify-center gap-2 overflow-x-hidden ">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 4,
      title:"Avatar with mask",
      code: `
        <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">  
            <div className="avatar">
              <div className="w-24 mask mask-squircle">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-24 mask mask-hexagon">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-24 mask mask-triangle">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
        </div>
      `,
    },
    {
      id: 5,
      title:"Avatar group",
      code: `
        <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 6,
      title:"Avatar group with counter",
      code: `
        <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
          <div className="avatar-group -space-x-6 rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-12 bg-neutral text-neutral-content">
                <span>+99</span>
              </div>
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 7,
      title:"Avatar with ring",
      code: `
        <div className="flex gap-1">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
        </div>
      `,
    },
    {
      id: 8,
      title:"Avatar with presence indicator",
      code: `
        <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">     
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="avatar offline">
              <div className="w-24 rounded-full">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>    
        </div>
      `,
    },
    {
      id: 9,
      title:"Avatar placeholder",
      code: `
        <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">     
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-24">
              <span className="text-3xl">D</span>
            </div>
          </div> 
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-16">
              <span className="text-xl">AI</span>
            </div>
          </div> 
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-12">
              <span>SY</span>
            </div>
          </div> 
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span className="text-xs">UI</span>
            </div>
          </div>   
        </div>
      `,
    },
  ];
  
  export { avatar };
  