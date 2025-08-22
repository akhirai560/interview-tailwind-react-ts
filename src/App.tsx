import React, { useState } from 'react';
import './App.css'
import TeacherFlow from './TeacherFlow';
import StudentFlow from './StudentFlow';

type FlowMode = 'Teacher' | 'student'
function App() {
  const [mode, setMode] = useState<FlowMode>('Teacher');

  return (
    <>
    <main className='h-[100vh] flex flex-col '>
    <header className='w-full h-[60px] flex justify-between'>
      <button className='border bg-amber-600 '>Teacher Mode</button>
      <button className='border bg-green-400'>Student Mode</button>
    </header>

    <section className='flex-1 bg-amber-100'>
      {
        mode === 'Teacher' ? <TeacherFlow /> : <StudentFlow />
      }
    </section>
    </main>
    

    
      
    </>
  );
}

export default App
