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
                <div className="bg-blue-100 rounded-xl p-8">
                    <h1>Employee View</h1>
                    <h1>Employee View</h1>

                    <h1>Employee View</h1>
                    <h1>Employee View</h1>
                    <h1>Employee View</h1>
                    <h1>Employee View</h1>
                    <h1>Employee View</h1>

                    
                </div>
            </main>
        </>
    );
}
export default employeeInfo
