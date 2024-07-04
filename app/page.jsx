"use client"
import { getNetlifyContext } from 'utils';

import { addData, createDB, getData, persistData, updateIndicator } from "./db";
import { getAxios, postAxios } from "api/axios";
import { useEffect, useRef } from 'react';
import { apiGetLocal } from 'api/api';



export default function Page() {

    const inputRef = useRef(null);
    let installPrompt = null;
  
    useEffect(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => console.log('scope is: ', registration.scope));
      }
    }, []);
  
    useEffect(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/service-worker.js', { scope: '/docs' })
          .then((registration) => console.log('scope is: ', registration.scope));
      }
    }, []);
  
    useEffect(() => {
  
  
      window.addEventListener("beforeinstallprompt", (event) => {
        event.preventDefault();
        installPrompt = event;
      });
  
      initDB();
    
       
    }, [])
  
  
    useEffect(() => {
      const interval = setInterval(() => {
        console.log('This will run every second!');
        // apiPost();      
        apiGetLocal();
      }, 10000);
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      // apiGet();
      // apiPost();    
    }, [])
  
    function apiPost() {
      const requestOptions = {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
  
    },
      };
      fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => console.log('apiPost', data));
  }
      
  
    async function initDB() {
      await createDB();
      addData()
    }
  
    
    async function installApp() {
      if (!installPrompt) {
        return;
      }
      const result = await installPrompt.prompt();
      console.log(`Install prompt was: ${result.outcome}`);
      installPrompt = null;
    }


    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <form className="w-full max-w-lg  
        rounded-lg border-2 border-gray-400 p-12">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              First Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
              Last Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Password
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************"/>
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
              City
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
              State
            </label>
            <div className="relative">
              <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                <option>New Mexico</option>
                <option>Missouri</option>
                <option>Texas</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
              Zip
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
          </div>
        </div>
      </form>
      <div className="flex">
      <button className="p-4" id="updateIndicator" onClick={updateIndicator}>updateIndicator</button>
        <button className="p-4" id="getData" onClick={getData}>getData</button>
        <button className="p-4" id="install" onClick={installApp}>Install</button>
        <button className="p-4" id="persistData" onClick={persistData}>persistData</button>
        <button className="p-4" id="apiGetLocal" onClick={apiGetLocal}>apiGetLocal</button>
        <button className="p-4" id="getAxios" onClick={getAxios}>getAxios</button>
        <button className="p-4" id="postAxios" onClick={postAxios}>postAxios</button>
        {/* <button className="p-4" id="apiPostLocal" onClick={apiPostLocal}>apiPostLocal</button>
        <button className="p-4" id="apiPostLocalAlt" onClick={apiPostLocalAlt}>apiPostLocalAlt</button> */}
        {/* <button className="p-4" id="apiGetSupa" onClick={apiGetSupa}>apiGetSupa</button>
        <button className="p-4" id="apiGetSupa" onClick={apiPostSupa}>apiPostSupa</button> */}
      </div>
    </main>
    );
}
