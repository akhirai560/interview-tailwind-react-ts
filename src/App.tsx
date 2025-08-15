import React from 'react';
import './App.css'
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

type CardProps = {
  heading: string;
  subHeading: string;
  imageURL: string;
  summary: string;
  btnText: string;
  githubLink?: string;
};
function Card({ heading, subHeading, imageURL, summary, btnText, githubLink }) {
  return (
    <div className="card w-55 max-h-[500px] bg-white border border-gray-100 shadow-2xl shadow-gray-300 p-3">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          style={{ width: '40px', height: '40px', borderRadius: '20px' }}
          src={imageURL}
        />
      </div>
      <h4 className=' text-gray-700 pt-2' style={{ textAlign: 'center' }}>Sarah Doeh</h4>
      <div className='text-xs text-gray-400' style={{ textAlign: 'center' }}>Frontend Engineer @Microsoft</div>
      <p className='text-xs text-gray-600 pt-3 pb-3 text-center ' >I turned coffe into code and fo o trips very regulary i dont know how you manage but i think you can do it</p>
      <button className='w-full h-[30px] bg-violet-600 text-white mt-3 mb-3 text-sm cursor-pointer'> Connect with me</button>
      <div className='flex justify-around text-sm pt-2 pb-2'> 
      <FaGithub />
      <FaLinkedin />
      <FaInstagram />
      <FaFacebook />
      
      </div>
    </div>
  );
}

function App() {
  return (
    <>
    <div className='flex justify-center items-center  h-[100vh]'><Card imageURL={'https://picsum.photos/200/300'}/></div>
    
    </>
  );
}

export default App
