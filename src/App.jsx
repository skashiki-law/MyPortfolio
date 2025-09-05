import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='text-gray-700 border-b border-gray-200' id="header">
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
      <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
        <span className='text-xl ml-3'>NisshoCode</span>
      </a>
      <nav className='md:ml-auto text-base'>
        <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
        <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
        <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
        <a href="#blog" className='mr-5 hover:text-blue-400 duration-300'>Blog</a>
      </nav>
    </div>
    </header>
    
    <section className='text-gray-700' id="home">
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-2xl sm:text-4xl text-gray-900 font-medium mb-4'>NisshoCode<br />
          My Portfolio Website</h1>
          <p className='mb-8 leading-relaxed'>私の趣味はプログラミングです。これまでに友人のリクエストに答えてウェブサイトやスマホアプリを作り、喜ばれました。まだ趣味の領域ですが、これからもっと勉強して、デザイン性の高いサイト作りに挑戦したいと思っています。</p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/myPictureF.png" alt="" />
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t' id="about">
      <div className='container mx-auto py-24 px-5'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl text-gray-900 font-medium mb-2'><a href="#header">About Me</a></h1>
          <p className='pb-10'>私の趣味はプログラミングです。これまでに友人のリクエストに答えてウェブサイトやスマホアプリを作り、喜ばれました。まだ趣味の領域ですが、これからもっと勉強して、デザイン性の高いサイト作りに挑戦したいと思っています。</p>
        </div>

        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z"
                      fill="currentColor"
                    />
                  </svg>

                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
              </div>
              <div>
                <p>エクシアのプロト機となる存在。その名はタロットカードの「正義の女神（アストレア）」から付けられた。Ｏ（オー）ガンダムの汎用性を引き継いだテスト機であり、ガンダムの各種装備をテストするために作られた。エクシアの系列機だが、格闘戦用の機体ではない。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る ⇒ </a>
              </div>

            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z"
                      fill="currentColor"
                    />
                  </svg>

                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
              </div>
              <div>
                <p>エクシアのプロト機となる存在。その名はタロットカードの「正義の女神（アストレア）」から付けられた。Ｏ（オー）ガンダムの汎用性を引き継いだテスト機であり、ガンダムの各種装備をテストするために作られた。エクシアの系列機だが、格闘戦用の機体ではない。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る ⇒ </a>
              </div>

            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-100 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 10C13 11.1046 13.8954 12 15 12C16.1046 12 17 11.1046 17 10V5C17 3.89543 16.1046 3 15 3C13.8954 3 13 3.89543 13 5V10ZM5 8C3.89543 8 3 8.89543 3 10C3 11.1046 3.89543 12 5 12H10C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8H5ZM15 13C13.8954 13 13 13.8954 13 15C13 16.1046 13.8954 17 15 17H20C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13H15ZM10 22C8.89543 22 8 21.1046 8 20L8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15V20C12 21.1046 11.1046 22 10 22ZM8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V7H10C8.89543 7 8 6.10457 8 5ZM3 15C3 16.1046 3.89543 17 5 17C6.10457 17 7 16.1046 7 15V13H5C3.89543 13 3 13.8954 3 15ZM17 20C17 21.1046 16.1046 22 15 22C13.8954 22 13 21.1046 13 20V18H15C16.1046 18 17 18.8954 17 20ZM22 10C22 8.89543 21.1046 8 20 8C18.8954 8 18 8.89543 18 10V12H20C21.1046 12 22 11.1046 22 10Z"
                      fill="currentColor"
                    />
                  </svg>

                </div>
                <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
              </div>
              <div>
                <p>エクシアのプロト機となる存在。その名はタロットカードの「正義の女神（アストレア）」から付けられた。Ｏ（オー）ガンダムの汎用性を引き継いだテスト機であり、ガンダムの各種装備をテストするために作られた。エクシアの系列機だが、格闘戦用の機体ではない。</p>
                <a href="#" className='mt-3 text-green-500 items-center'>もっと見る ⇒ </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200' id="skills">
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
          <img src="./img/pc.jpg" alt="" className='rounded' />
        </div>

        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'><a href="#header">My Skills</a></h1>
          <div>
            <h2>HTML/CSS</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
            </div>
            <h2>JavaScript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{width:"75%"}}>75%</div>
            </div>
            <h2>React</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{width:"60%"}}>60%</div>
            </div>
            <h2>Python</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{width:"80%"}}>80%</div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default App
