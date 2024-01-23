export const tooltip =[
    {id:1,
    title:"Tooltip",
    code:`
    <div className=" my-6">
    <div className="tooltip" data-tip="hello">
      <button className="btn">Hover me</button>
    </div>
    </div>
    `,

},{id:2,
    title:"Force open",
    code:`
    <div className="my-6 gap-1">
        <div className="tooltip tooltip-open" data-tip="hello">
          <button className="btn">Force open</button>
        </div>
    </div>
    `,

},{id:3,
    title:"Bottom",
    code:`
    <div className="m-6">
        <div className="tooltip tooltip-open tooltip-bottom" data-tip="hello">
          <button className="btn">Bottom</button>
        </div>
    </div>
    `,

},{id:4,
    title:"Responsive tooltip. only show for large screen",
    code:`
    <div className="my-6">
        <div className="lg:tooltip" data-tip="hello">
          <button className="btn">Hover me</button>
        </div>
    </div>
    `,

}
]