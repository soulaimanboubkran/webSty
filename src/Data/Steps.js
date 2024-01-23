export const steps =[
    {id:1,
    title:"Horizontal",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="steps">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
    </div>
    `,

},{id:2,
    title:"Vertical",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="steps steps-vertical">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
    </div>
    `,

},{id:3,
    title:"responsive (vertical on small screen, horizontal on large screen)",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="steps steps-vertical lg:steps-horizontal">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step">Purchase</li>
          <li className="step">Receive Product</li>
        </ul>
    </div>
    `,

},{id:4,
    title:"With data-content",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="steps">
          <li data-content="?" className="step step-neutral">Step 1</li>
          <li data-content="!" className="step step-neutral">Step 2</li>
          <li data-content="✓" className="step step-neutral">Step 3</li>
          <li data-content="✕" className="step step-neutral">Step 4</li>
          <li data-content="★" className="step step-neutral">Step 5</li>
          <li data-content="" className="step step-neutral">Step 6</li>
          <li data-content="●" className="step step-neutral">Step 7</li>
        </ul>
    </div>
    `,

},{id:5,
    title:"Custom colors",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="steps">
          <li className="step step-info">Fly to moon</li>
          <li className="step step-info">Shrink the moon</li>
          <li className="step step-info">Grab the moon</li>
          <li className="step step-error" data-content="?">Sit on toilet</li>
        </ul>
    </div>
    `,

},{id:6,
    title:"With scrollable wrapper",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="overflow-x-auto">
          <ul className="steps">
            <li className="step">start</li>
            <li className="step step-secondary">2</li>
            <li className="step step-secondary">3</li>
            <li className="step step-secondary">4</li>
            <li className="step">5</li>
            <li className="step step-accent">6</li>
            <li className="step step-accent">7</li>
            <li className="step">8</li>
            <li className="step step-error">9</li>
            <li className="step step-error">10</li>
            <li className="step">11</li>
            <li className="step">12</li>
            <li className="step step-warning">13</li>
            <li className="step step-warning">14</li>
            <li className="step">15</li>
            <li className="step step-neutral">16</li>
            <li className="step step-neutral">17</li>
            <li className="step step-neutral">18</li>
            <li className="step step-neutral">19</li>
            <li className="step step-neutral">20</li>
            <li className="step step-neutral">21</li>
            <li className="step step-neutral">22</li>
            <li className="step step-neutral">23</li>
            <li className="step step-neutral">end</li>
          </ul>
        </div>
    </div>
    `,

}
]