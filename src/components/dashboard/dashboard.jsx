import { scans } from "../../utils/data";
import { useEffect, useState } from "react";
function Dashboard(){
    let [scandata,setScandata]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const result= scans;
            setScandata(result)
        }
        fetchData();
    },[])
    console.log("data",scandata)
    return(
        <>
            <main>
                <section className="px-5 flex flex-col gap-12">
                    <div className="flex justify-between flex-wrap gap-4">
                        <div>
                            <span className="text-gray-600">Org :</span>
                            <span className="font-bold">Project X</span>
                        </div>
                        <div>
                             <span className="text-gray-600">Owner :</span>
                             <span className="font-bold">Nammagiri</span> 
                        </div>
                        <div>
                            <span className="text-gray-600">Total Scans :</span>
                             <span className="font-bold">100</span> 
                        </div>
                        <div>
                            <span className="text-gray-600">Scheduled:</span>
                             <span className="font-bold">1000</span> 
                        </div>
                        <div>
                            <span className="text-gray-600">Rescans :</span>
                             <span className="font-bold">100</span> 
                        </div>
                        <div>
                            <span className="text-gray-600">Failed Scans:</span>
                             <span className="font-bold">100</span> 
                        </div>
                        <div>
                             <span></span>
                             <span className="text-gray-600">10 min ago</span> 
                        </div>
                        
                    </div>
                    <article className="flex justify-between">
                        <div>
                             <p className="text-gray-600">Critical Severity</p>
                             <p className="font-bold">86</p>
                        </div>
                        <div>
                            <p className="text-gray-600">High Severity</p>
                            <p className="font-bold">16</p>
                        </div>
                       <div>
                            <p className="text-gray-600">Medium Severity</p>
                            <p className="font-bold">26</p>
                        </div>
                        <div>
                            <p className="text-gray-600">Low Severity</p>
                            <p className="font-bold">16</p>
                        </div>
                    </article>
                </section>
                <section className="px-5 mt-10">
                    <table border="1" cellPadding="8">
                    <thead>
                        <tr>
                        <th className="px-4 py-2 border">Scan Name</th>
                        <th className="px-4 py-2 border">Type </th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Progress</th>
                        <th className="px-4 py-2 border">Vulnerability</th>
                        <th className="px-4 py-2 border">Last Scan</th>
                        </tr>
                    </thead>

                    <tbody>
                        {scandata.map((scan) => (
                        <tr key={scan.id}>
                            <td className="px-4 py-2 ">{scan.name}</td>
                            <td className="px-4 py-2 ">{scan.type}</td>
                            <td className="px-4 py-2 ">{scan.status}</td>
                            <td className="px-4 py-2 ">{scan.progress}</td>
                            <td className="px-4 py-2 ">
                                <div className="flex gap-2 flex-wrap">
                                    {Object.entries(scan.vulnerabilities).map(([level, count]) => {
                                    let colorClass = "";

                                    if (level === "critical") colorClass = "bg-red-600 text-white";
                                    else if (level === "high") colorClass = "bg-orange-500 text-white";
                                    else if (level === "medium") colorClass = "bg-yellow-400 text-black";
                                    else if (level === "low") colorClass = "bg-green-500 text-white";

                                    return (
                                        <span
                                        key={level}
                                        className={`px-2 py-1 text-xs rounded font-semibold ${colorClass}`}
                                        >
                                        {count}
                                        </span>
                                    );
                                    })}
                                </div>
                            </td>
                            <td className="px-4 py-2 ">{scan.lastScan}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </section>
            </main>
        </>
    )
}
export default Dashboard;