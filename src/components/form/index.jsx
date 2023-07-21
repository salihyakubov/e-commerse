import React from 'react';
import { useState } from 'react';

const Form = ({title, handleClick, wrong}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

if(title == 'Register'){
    return (
        <>
            <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Username</p>
              <input placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} type="text" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
              <input placeholder="123@ex.com" value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Password</p>
              <input placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} type="password" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div class="relative">
            {wrong ? <p style={{color: 'red', fontWeight: '500'}}>This Email already used !</p>: ''}

            </div>
            <button class="relative">
              <a onClick={() => handleClick(email, pass, name)} class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease">{title}</a>
            </button>
          </div> 
        </>
    )
}
    return (
        <>
            <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
              <input placeholder="123@ex.com" value={email} onChange={(e) => setEmail(e.target.value)} type="text" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div class="relative">
              <p class="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600
                  absolute">Password</p>
              <input placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} type="password" class="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md"/>
            </div>
            <div class="relative">
                {wrong ? <p style={{color: 'red', fontWeight: '500'}}>Email or password is wrong !</p>: ''}
                

            </div>

            <button class="relative">
              <a onClick={() => handleClick(email, pass, name)} class="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500
                  rounded-lg transition duration-200 hover:bg-indigo-600 ease">{title}</a>
            </button>

          </div> 
        </>
    );
};

export default Form;