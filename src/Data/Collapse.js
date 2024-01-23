export const collapse =[
    {id:1,
    title:"Collapse with focus",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div tabIndex={0} className="collapse bg-base-200"> 
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
    </div>
    `,

},{id:2,
    title:"Collapse with checkbox",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="collapse bg-base-200">
          <input type="checkbox" /> 
          <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
          </div>
          <div className="collapse-content"> 
            <p>hello</p>
          </div>
        </div>
    </div>
    `,

},{id:3,
    title:"Collapse using <details> and <summary> tag",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <details className="collapse bg-base-200">
          <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
          <div className="collapse-content"> 
            <p>content</p>
          </div>
        </details>
    </div>
    `,

},{id:4,
    title:"With border and background color",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div tabIndex={0} className="collapse border border-base-300 bg-base-200"> 
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
    </div>
    `,

},{id:5,
    title:"With arrow icon",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
    </div>
    `,

},{id:6,
    title:"With arrow plus/minus icon",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
          <div className="collapse-title text-xl font-medium">
            Focus me to see content
          </div>
          <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
    </div>
    `,

},{id:7,
    title:"Custom colors for collapse that works with focus",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div tabIndex={0} className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content">
          <div className="collapse-title">
            Focus me to see content
          </div>
          <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
          </div>
        </div>
    </div>
    `,

},{id:8,
    title:"Custom colors for collapse that works with checkbox",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="collapse bg-base-200">
          <input type="checkbox" className="peer" /> 
          <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            Click me to show/hide content
          </div>
          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
            <p>hello</p>
          </div>
        </div>
    </div>
    `,

}
]