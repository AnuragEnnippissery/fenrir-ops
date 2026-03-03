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
                        <p>Org : Project x</p>
                        <p>Owner : Nammagiri</p>
                        <p>Total Scans : 100</p>
                        <p>Scheduled:1000</p>
                        <p>Rescans:100</p>
                        <p>Failed Scans:100</p>
                        <p>10 min ago</p>
                       
                    </div>
                    <article className="flex justify-between">
                        <div>
                             <p>Critical Severity</p>
                             <p>86</p>
                        </div>
                        <div>
                            <p>High Severity</p>
                            <p>16</p>
                        </div>
                       <div>
                            <p>Medium Severity</p>
                            <p>26</p>
                        </div>
                        <div>
                            <p>Low Severity</p>
                            <p>16</p>
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