export const toast=[
    {id:1,
    title:"toast with alert inside",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="toast toast-bottom toast-center relative">
          <div className="alert alert-info">
            <span>New message arrived.</span>
          </div>
        </div>
    </div>
    `,

},{id:2,
    title:"toast-top toast-start",
    code:`
    <div className="flex flex-wrap overflow-x-hidden items-center justify-center gap-3">
        <div className="toast toast-top toast-center relative">
          <div className="alert alert-info">
            <span>New mail arrived.</span>
          </div>
          <div className="alert alert-success">
            <span>Message sent successfully.</span>
          </div>
        </div>
    </div>
    `,

}
]