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
                    <article className="px-8 flex flex-8 flex-col gap-8 mx-3 border-l border-gray-800">
                        <div className="flex justify-between ">
                            <div>
                                <img src={spidering}/>
                                <p>Spidering</p>
                            </div>
                            <div>
                                <img src={mapping}/>
                                <p>Mapping</p>
                            </div>
                            <div>
                                <img src={testing}/>
                                <p>Testing</p>
                            </div>
                            <div>
                                <img src={validating}/>
                                <p>Validating</p>
                            </div>
                            <div>
                                <img src={reporting}/>
                                <p>Reporting</p>
                            </div>
                        </div>
                        <div className="flex justify-between py-5 border-t border-gray-800 ">
                            <div>
                                <p>Scan Types</p>
                                <p>Grey Box</p>
                            </div>
                            <div>
                                <p>Targets</p>
                                <p>google.com</p>
                            </div>
                            <div>
                                <p>Started At</p>
                                <p>Nov 22 , 9.00</p>
                            </div>
                            <div>
                                <p>Credentials</p>
                                <p>2 Active</p>
                            </div>
                            <div>
                                <p>Files</p>
                                <p>Control.pdf</p>
                            </div>
                            <div>
                                <p>Checklists</p>
                                <p className="text-teal-600">40/350</p>
                            </div>
                        </div>

                    </article>
                </section>
                <section className="flex ">
                    <article className="">
                        {scandatalog.map((item,index)=>{
                            return(
                                
                                    <div key={index}>
                                        <span>{item.timestamp}</span>
                                        <span>{item.message}</span>
                                    </div>
                                    
                                
                            )
                        })}
                    </article>
                     <article>
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
                        <div key={index} className="p-4 rounded-lg border mb-4">
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