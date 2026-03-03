import spidering from "../../assets/spidering.png";
import mapping from "../../assets/mapping.png";
import testing from "../../assets/testing.png";
import validating from "../../assets/validating.png";
import reporting from "../../assets/reporting.png";
import { scanlogs ,findinglog} from "../../utils/data";
import { useState,useEffect } from "react";
function Scan(){
    let [scandatalog,setScandatalog]=useState([])
    let [findlog,setFindlog]=useState([])
        useEffect(()=>{
            async function fetchData(){
                const result= scanlogs;
                const findresult=findinglog
                setScandatalog(result)
                setFindlog(findresult)
            }
            fetchData();
        },[])
        console.log("datalog",scandatalog)
    return(
        <>
            <main >
                <section className="flex ">
                    <article className="flex flex-col bg-black justify-center items-center mx-4 w-40 h-40 rounded-full ">
                        <div className="text-teal-700 text-5xl">0%</div>
                        <div className="text-white">In progress</div>
                    </article>
                    <article className="px-8 flex flex-8 flex-col gap-8 mx-3 border-l border-gray-600">
                        <div className="flex justify-between ">
                            <div>
                                <img src={spidering}/>
                                <p className="text-gray-600">Spidering</p>
                            </div>
                            <div>
                                <img src={mapping}/>
                                <p className="text-gray-600">Mapping</p>
                            </div>
                            <div>
                                <img src={testing}/>
                                <p className="text-gray-600">Testing</p>
                            </div>
                            <div>
                                <img src={validating}/>
                                <p className="text-gray-600">Validating</p>
                            </div>
                            <div>
                                <img src={reporting}/>
                                <p className="text-gray-600">Reporting</p>
                            </div>
                        </div>
                        <div className="flex justify-between py-5 border-t  border-gray-600 ">
                            <div>
                                <p className="text-gray-600">Scan Types</p>
                                <p className="font-bold">Grey Box</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Targets</p>
                                <p className="font-bold">google.com</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Started At</p>
                                <p className="font-bold">Nov 22 , 9.00</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Credentials</p>
                                <p className="font-bold">2 Active</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Files</p>
                                <p className="font-bold">Control.pdf</p>
                            </div>
                            <div>
                                <p className="text-gray-600">Checklists</p>
                                <p className="text-teal-600">40/350</p>
                            </div>
                        </div>

                    </article>
                </section>
                <p className="font-bold">Live Scans Console</p>
                <section className="flex ">
                    
                    <article className="border-r border-gray-600">
                        <p className="text-gray-600  border-b border-gray-600 py-2 ">Active Log</p>
                        {scandatalog.map((item,index)=>{
                            return(
                                
                                    <div className="mt-3 mr-2 "key={index}>
                                        <span className="text-gray-600 ">[{item.timestamp}]</span>
                                        <span>  {item.message}</span>
                                    </div>
                                    
                                
                            )
                        })}
                    </article>
                    <article>
                    <p className="text-gray-600 border-b border-gray-600  px-2 py-2 ">Finding log</p>
                    {findlog.map((item, index) => {
                        let colorClass = "";

                        const level = item.severity.toLowerCase();

                        if (level === "critical") 
                        colorClass = "bg-red-600 text-white";
                        else if (level === "high") 
                        colorClass = "bg-orange-500 text-white";
                        else if (level === "medium") 
                        colorClass = "bg-yellow-400 text-black";
                        else if (level === "low") 
                        colorClass = "bg-green-500 text-white";

                        return (
                        <div key={index} className="p-4 rounded-lg border mb-4 mt-3 mx-2">
                            <div className="flex justify-between items-center">
                            <p className={`px-3 py-1 text-xs rounded-full font-semibold ${colorClass}`}>
                                {item.severity}
                            </p>
                            <p className="text-sm text-gray-500">{item.time}</p>
                            </div>

                            <div className="mt-3">
                            <p className="font-semibold text-lg">{item.title}</p>
                            <p className="text-teal-600">{item.endpoint}</p>
                            <p className="text-gray-600 mt-1">{item.description}</p>
                            </div>
                        </div>
                        );
                    })}
                    </article>
                </section>
            </main>
        </>
    )
}
export default Scan;