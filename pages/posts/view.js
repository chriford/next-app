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
                  <div className="bg-white p-2">
                    <a>home</a>
                  </div>
                <div className="bg-gray-800 rounded-0 p-8 text-opacity-300 m-0">
                    <div className="text-white text-4xl">
                      <h1 className="flex space-x-4 text-5xl text-center underline">Employee Detail</h1>
                      <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                      ><h2>Fast Writer</h2>

                      </div>
                      <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                      ><h2>Fast Writer</h2>
                      <p className="text-2xl">
                        Hello world
                      </p>

                      </div>
                      <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                      ><h2>Fast Writer</h2>

                      </div>
                      <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                      ><h2>Fast Writer</h2>

                      </div>
                      <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                      ><h2>Fast Writer</h2>

                      </div>
                      <div className="inline-block no-underline hover:bg-blue-500 hover:text-black rounded-xl ml-2 mt-2 p-2 bg-blue-600"
                      ><h2>Fast Writer</h2>

                      </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default employeeInfo
