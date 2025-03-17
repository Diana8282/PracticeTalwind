import './App.css'
function App() {


  return (
     <div className='min-h-screen flex  justify-center border bg-gradient-to-bl from-neutral-800 to-gray-700'>
     
      <header className='w-full sm:w-1/4 md:w-3/4 lg:1/5 xl:w-1/2  fixed px-3 py-1 rounded-full border border-sky-400 h-fit flex items-center bg-black/35 justify-between m-3'>
      <div className='font-bold text-blue-700 '>فیلم کده</div>
        <nav>
          <ul className='md:flex items-center hidden   gap-5'>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200 gap-'>خانه</li>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200 gap-'>خرید</li>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200 gap-'>ارتباط</li>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200 gap-'>ساپورت</li>
            <li className='text-neutral-200 cursor-pointer hover:text-sky-300 duration-200 gap-'>درباره ما</li>
          </ul>
        </nav>
        <a href="" className=' px-2 py-0.5 text-white text-sm rounded-full bg-gradient-to-r from-sky-500 to-pink-500 hover:brightness-125 duration-200 hover:animate-bounce'>ورود |نبت نام</a>
      </header>
     </div>
  )
}

export default App
