export const buttonsData = [
  {
    id: 1,
    code: `
            <div className='flex gap-1'>
              <button className='rounded-xl bg-blue-500 text-white py-2 px-4 '>button</button>
              <button className='rounded-xl bg-red-500 text-white py-2 px-4 '>button</button>
              <button className='rounded-xl bg-green-500 text-white py-2 px-4 '>button</button>
              <button className='rounded-xl bg-black text-white py-2 px-4 '>button</button>
              <button className='rounded-xl bg-orange-500 text-white py-2 px-4 '>button</button>
            </div>
          `,
  },
];
export const buttonsOutlineData = [
  {
    id: 1,
    code: `
            <div className='flex gap-1'>
              <button className='rounded-xl border hover:text-white text-blue-500 hover:bg-blue-500 py-2 px-4 '>button</button>
              <button className='rounded-xl border hover:text-white text-red-500  hover:bg-red-500  py-2 px-4 '>button</button>
              <button className='rounded-xl border hover:text-white text-green-500  hover:bg-green-500  py-2 px-4 '>button</button>
              <button className='rounded-xl border hover:text-white text-black hover:bg-black  py-2 px-4 '>button</button>
              <button className='rounded-xl border hover:text-white text-orange-500  hover:bg-orange-500  py-2 px-4 '>button</button>
            </div>
          `,
  },
];
export const buttonsRoundedeData = [
  {
    id: 1,
    code: `
              <button className='rounded-full border text-white  bg-blue-500 py-2 px-10 '>button</button>
          `,
  },
];
export const buttonsIconData = [
  {
    id: 1,
    code: `
              <button className='flex items-center gap-1  rounded-xl border text-black  bg-gray-400 py-2 px-10 '>
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
                        </svg>
                        <span>Download</span>
              </button>
          `,
  },
];
export const buttonsCircleData = [
  {
    id: 1,
    code: `
              <button className='  rounded-full border text-black  bg-gray-400 py-3 px-3 '>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
          `,
  },
];
export const buttonsBlockData = [
  {
    id: 1,
    code: `
             <div className='block'>
                <button className='rounded-xl border text-white w-full hover:bg-blue-600 bg-blue-700 py-3 px-3 '>
                    block
                </button>
             </div>
          `,
  },
];
export const buttonsLoadingData = [
  {
    id: 1,
    code: `
    <button disabled="" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
        <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
        </svg>
        Loading...
    </button>
          `,
  },
];
export const buttonsGroupData = [
  {
    id: 1,
    code: `
          <div className="inline-flex">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 border rounded-l">
                    Prev
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-10 border rounded-r">
                    Next
                </button>
        </div>
          `,
  },
];
