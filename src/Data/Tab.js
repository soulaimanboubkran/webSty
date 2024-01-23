export const tab =[
    {id:1,
    title:"Tabs",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div role="tablist" className="tabs">
          <a role="tab" className="tab">Tab 1</a>
          <a role="tab" className="tab tab-active">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div>
    </div>
    `,

},{id:2,
    title:"Bordered",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div role="tablist" className="tabs tabs-bordered">
          <a role="tab" className="tab">Tab 1</a>
          <a role="tab" className="tab tab-active">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div>
    </div>
    `,

},{id:3,
    title:"Lifted",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div role="tablist" className="tabs tabs-lifted">
          <a role="tab" className="tab">Tab 1</a>
          <a role="tab" className="tab tab-active">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div>
    </div>
    `,

},{id:4,
    title:"Boxed",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div role="tablist" className="tabs tabs-boxed">
          <a role="tab" className="tab">Tab 1</a>
          <a role="tab" className="tab tab-active">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div>
    </div>
    `,

},{id:5,
    title:"Sizes",
    code:`
    <div className="flex flex-wrap overflow-x-hidden  gap-22">
        {/* xs */}
        <div role="tablist" className="tabs tabs-lifted tabs-xs">
          <a role="tab" className="tab">Tiny</a>
          <a role="tab" className="tab tab-active">Tiny</a>
          <a role="tab" className="tab">Tiny</a>
        </div>
        {/* sm */}
        <div role="tablist" className="tabs tabs-lifted tabs-sm">
          <a role="tab" className="tab">Small</a>
          <a role="tab" className="tab tab-active">Small</a>
          <a role="tab" className="tab">Small</a>
        </div>
        {/* md */}
        <div role="tablist" className="tabs tabs-lifted">
          <a role="tab" className="tab">Normal</a>
          <a role="tab" className="tab tab-active">Normal</a>
          <a role="tab" className="tab">Normal</a>
        </div>
        {/* lg */}
        <div role="tablist" className="tabs tabs-lifted tabs-lg">
          <a role="tab" className="tab">Large</a>
          <a role="tab" className="tab tab-active">Large</a>
          <a role="tab" className="tab">Large</a>
        </div>
    </div>
    `,

},{id:6,
    title:"radio tab bordered + tab content",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div role="tablist" className="tabs tabs-bordered">
          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 1" />
          <div role="tabpanel" className="tab-content p-10">Tab content 1</div>

          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 2" checked />
          <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

          <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Tab 3" />
          <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
        </div>
    </div>
    `,

},{id:7,
    title:"radio tab lifted + tab content",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1</div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 2" checked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>
        </div>
    </div>
    `,

},{id:8,
    title:"Tabs with custom color",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div role="tablist" className="tabs tabs-lifted">
          <a role="tab" className="tab">Tab 1</a>
          <a role="tab" className="tab tab-active [--tab-bg:yellow] [--tab-border-color:orange] text-primary">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div>
    </div>
    `,

}
]