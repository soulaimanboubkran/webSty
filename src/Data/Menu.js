export const menu =[
    {id:1,
    title:"Menu",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
    </div>
    `,

},{id:2,
    title:"Responsive: vertical on small screen, horizontal on large screen",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
    </div>
    `,

},{id:3,
    title:"Menu with icon only",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu bg-base-200 rounded-box">
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </a>
          </li>
        </ul>
    </div>
    `,

},{id:4,
    title:"Menu with disabled items",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li><a>Enabled item</a></li>
          <li className="disabled"><a>disabled item</a></li>
          <li className="disabled"><a>disabled item</a></li>
        </ul>
    </div>
    `,

},{id:5,
    title:"Menu with icons",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            Item 2
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Item 1
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              Item 3
            </a>
          </li>
        </ul>
    </div>
    `,

},{id:6,
    title:"Menu with icons and badge (responsive)",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box">
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              Inbox
              <span className="badge badge-sm">99+</span>
            </a>
          </li>
          <li>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Updates
              <span className="badge badge-sm badge-warning">NEW</span>
            </a>
          </li>
          <li>
            <a>
              Stats
              <span className="badge badge-xs badge-info"></span>
            </a>
          </li>
        </ul>
    </div>
    `,

},{id:7,
    title:"Menu with title as a parent",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li>
            <h2 className="menu-title">Title</h2>
            <ul>
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </li>
        </ul>
    </div>
    `,

},{id:8,
    title:"Collapsible submenu",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li><a>Item 1</a></li>
          <li>
            <details open>
              <summary>Parent</summary>
              <ul>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li><a>Submenu 1</a></li>
                      <li><a>Submenu 2</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
    </div>
    `,

},{id:9,
    title:"Collapsible submenu that works with class names",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li><a>Item 1</a></li>
          <li>
            <span className="menu-dropdown-toggle">Parent</span>
            <ul className="menu-dropdown">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
        </ul>
        <ul className="menu bg-base-200 w-56 rounded-box">
          <li><a>Item 1</a></li>
          <li>
            <span className="menu-dropdown-toggle menu-dropdown-show">Parent</span>
            <ul className="menu-dropdown menu-dropdown-show">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
        </ul>
    </div>
    `,

},{id:10,
    title:"File tree",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu menu-xs bg-base-200 rounded-lg max-w-xs w-full">
          <li><a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
            resume.pdf
          </a></li>
          <li>
            <details open>
              <summary>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
                My Files
              </summary>
              <ul>
                <li><a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                  Project-final.psd
                </a></li>
                <li><a>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                  Project-final-2.psd
                </a></li>
                <li>
                  <details open>
                    <summary>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
                      Images
                    </summary>
                    <ul>
                      <li><a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                        Screenshot1.png
                      </a></li>
                      <li><a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                        Screenshot2.png
                      </a></li>
                      <li>
                        <details open>
                          <summary>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
                            Others
                          </summary>
                          <ul>
                            <li><a>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                              Screenshot3.png
                            </a></li>
                          </ul>
                        </details>
                      </li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li><a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
            reports-final-2.pdf
          </a></li>
        </ul>
    </div>
    `,

},{id:11,
    title:"Menu with active item",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu bg-base-200 w-56">
          <li><a>Item 1</a></li>
          <li><a className="active">Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
    </div>
    `,

},{id:12,
    title:"Horizontal menu",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu menu-horizontal bg-base-200">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
    </div>
    `,

},{id:13,
    title:"Mega menu with submenu (responsive)",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu xl:menu-horizontal lg:min-w-max bg-base-200 rounded-box">
          <li>
            <a>Solutions</a>
            <ul>
              <li><a>Design</a></li>
              <li><a>Development</a></li>
              <li><a>Hosting</a></li>
              <li><a>Domain register</a></li>
            </ul>
          </li>
          <li>
            <a>Enterprise</a>
            <ul>
              <li><a>CRM software</a></li>
              <li><a>Marketing management</a></li>
              <li><a>Security</a></li>
              <li><a>Consulting</a></li>
            </ul>
          </li>
          <li>
            <a>Products</a>
            <ul>
              <li><a>UI Kit</a></li>
              <li><a>Wordpress themes</a></li>
              <li><a>Wordpress plugins</a></li>
              <li>
                <a>Open source</a>
                <ul>
                  <li><a>Auth management system</a></li>
                  <li><a>VScode theme</a></li>
                  <li><a>Color picker app</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a>Company</a>
            <ul>
              <li><a>About us</a></li>
              <li><a>Contact us</a></li>
              <li><a>Privacy policy</a></li>
              <li><a>Press kit</a></li>
            </ul>
          </li>
        </ul>
    </div>
    `,

},{id:14,
    title:"Collapsible with submenu (responsive)",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <ul className="menu lg:menu-horizontal bg-base-200 rounded-box lg:mb-64">
          <li><a>Item 1</a></li>
          <li>
            <details open>
              <summary>Parent item</summary>
              <ul>
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
                <li>
                  <details open>
                    <summary>Parent</summary>
                    <ul>
                      <li><a>item 1</a></li>
                      <li><a>item 2</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
    </div>
    `,

}
]