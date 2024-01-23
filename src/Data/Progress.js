export const progress =[
    {id:1,
    title:"Progress",
    code:`
    <div className="flex  gap-2 ">
        <div className="flex flex-col gap-2 items-center">
            <progress className="progress w-56" value={0} max="100"></progress>
            <progress className="progress w-56" value="10" max="100"></progress>
            <progress className="progress w-56" value="40" max="100"></progress>
            <progress className="progress w-56" value="70" max="100"></progress>
            <progress className="progress w-56" value="100" max="100"></progress>
        </div>
        <div className="flex flex-col gap-2 items-center">
            <progress className="progress progress-primary w-56" value={0} max="100"></progress>
            <progress className="progress progress-primary w-56" value="10" max="100"></progress>
            <progress className="progress progress-primary w-56" value="40" max="100"></progress>
            <progress className="progress progress-primary w-56" value="70" max="100"></progress>
            <progress className="progress progress-primary w-56" value="100" max="100"></progress>
        </div>
        <div className="flex flex-col gap-2 items-center">
            <progress className="progress progress-secondary w-56" value={0} max="100"></progress>
            <progress className="progress progress-secondary w-56" value="10" max="100"></progress>
            <progress className="progress progress-secondary w-56" value="40" max="100"></progress>
            <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
            <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
        </div>
    </div>
    `,

},{id:2,
    title:"Indeterminate (without value)",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <progress className="progress w-56"></progress>
    </div>
    `,

},{id:3,
    title:"Radial progress",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-1">
        <div className="radial-progress" style={{"--value":70}} role="progressbar">70%</div>
    </div>
    `,

},{id:4,
    title:"Different values",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="radial-progress" style={{"--value":0}} role="progressbar">0%</div>
        <div className="radial-progress" style={{"--value":20}} role="progressbar">20%</div>
        <div className="radial-progress" style={{"--value":60}} role="progressbar">60%</div>
        <div className="radial-progress" style={{"--value":80}} role="progressbar">80%</div>
        <div className="radial-progress" style={{"--value":100}} role="progressbar">100%</div>
    </div>
    `,

},{id:5,
    title:"Custom color",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="radial-progress text-primary" style={{"--value":70}} role="progressbar">70%</div>
    </div>
    `,

},{id:6,
    title:"With background color and border",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{"--value":70}} role="progressbar">70%</div>
    </div>
    `,

},{id:7,
    title:"Custom size and custom thickness",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2px" }} role="progressbar">70%</div>
        <div className="radial-progress" style={{ "--value": "70", "--size": "12rem", "--thickness": "2rem" }} role="progressbar">70%</div>
    </div>
    `,

}
]