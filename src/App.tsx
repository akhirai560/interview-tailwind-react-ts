import React from 'react';
import './App.css'

function CardLayout({width = 300, height = 150} : {width?: number, height?: number}) {

  return <>
  <div className='h-[150px] max-w-[250px] shadow-2xl border-gray-500 rounded-2xl p-2 flex flex-col shrink-0'>
    <div className='flex flex-row justify-start gap-2'>
      <div className='w-[30px] h-[30px] object-fill'>
        <img className='profile-pic h-[100%] w-100 ' width='100%' height='100%'  src="https://picsum.photos/200/300" alt="profile pic" />
      </div>
      
      <div>
        <p className='text-'>Sarah John</p>
        <p className='text-gray-500'>@SarahJohn</p>
      </div>
    </div>
    <div className='text-gray-700'>Lorem ipsum hello this is akhilesh and i am in an interview to go somewhere</div>
  </div>

  </>
}

function App() {
  return (
    <>
    <div className='w-[100vw] flex gap-4 p-4 responsive'><CardLayout /> <CardLayout /><CardLayout /><CardLayout /><CardLayout /><CardLayout /><CardLayout /></div>
    </>
  );
}

export default App
