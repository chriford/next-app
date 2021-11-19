import head from "next/head"
import { useState, useEffect } from 'react';

const employeeInfo = () => {
    const [employees, setEmployee] = useState([]);
    useEffect(()=>{
        const getData = async () => {
          try {
            const response = await fetch("http://localhost:8000/api/employee/get/all/");
            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };
        getData();
    })

    return (
        <>
          <main>

              <div className="bg-blue-200 p-2 flex space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                <a href="#" className="inline-block text-2xl hover:text-2xl text-skyblue-300 hover:underline">
                  home
                </a>
              </div>

              <div className="md:bg-gray-800 hover:shadow-2xl shadow-xl ring-purple-500 flex space-x-4 bg-white-800 rounded-0 p-8 text-opacity-300 m-0">
                  
                  <div className="text-white text-4xl">
                    <h1 className="text-5xl text-center underline">
                      <title>Employee Detail</title>
                    </h1>

                    <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                    ><h2>Fast Writer</h2>
                      <div className="text-2xl">
                        Employee: <br></br>
                        Address: <br></br>
                        Transport: <br></br>
                        Distance: <br></br>
                        datetime: <br></br>
                      </div>
                    </div>

                    <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                    ><h2>Fast Writer</h2>
                      <p className="text-2xl">
                        Employee: <br></br>
                        Address: <br></br>
                        Transport: <br></br>
                        Distance: <br></br>
                        datetime: <br></br> 
                      </p>
                    </div>
                    
                    <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                    ><h2>Fast Writer</h2>
                      <p className="text-2xl">
                        Employee: <br></br>
                        Address: <br></br>
                        Transport: <br></br>
                        Distance: <br></br>
                        datetime: <br></br> 
                      </p>            
                    </div>

                    <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                    ><h2>Fast Writer</h2>
                      <p className="text-2xl">
                        Employee: <br></br>
                        Address: <br></br>
                        Transport: <br></br>
                        Distance: <br></br>
                        datetime: <br></br>
                      </p>
                    </div>

                    <div className="border-trasparent  shadow-2xl inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                    ><h2>Fast Writer</h2>
                      <p className="text-2xl">
                        Employee: <br></br>
                        Address: <br></br>
                        Transport: <br></br>
                        Distance: <br></br>
                        datetime: <br></br>
                      </p>
                    </div>

                    <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                    ><h2>Fast Writer</h2>
                      <p className="text-2xl">
                        Employee: <br></br>
                        Address: <br></br>
                        Transport: <br></br>
                        Distance: <br></br>
                        datetime: <br></br>
                      </p>
                    </div>

                  </div>
              </div>
          </main>
        </>
    );
}
export default employeeInfo
