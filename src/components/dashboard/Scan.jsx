import spidering from "../../assets/spidering.png";
import mapping from "../../assets/mapping.png";
import testing from "../../assets/testing.png";
import validating from "../../assets/validating.png";
import reporting from "../../assets/reporting.png";
import { scanlogs, findinglog } from "../../utils/data";
import { useState, useEffect } from "react";

function Scan() {
  let [scandatalog, setScandatalog] = useState([]);
  let [findlog, setFindlog] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = scanlogs;
      const findresult = findinglog;
      setScandatalog(result);
      setFindlog(findresult);
    }
    fetchData();
  }, []);

  return (
    <main className="px-4 py-4">

      {/* Top Section */}
      <section className="flex flex-col lg:flex-row gap-6">

        {/* Progress Circle */}
        <article className="flex flex-col bg-black justify-center items-center w-32 h-32 lg:w-40 lg:h-40 rounded-full mx-auto lg:mx-4">
          <div className="text-teal-700 text-4xl lg:text-5xl">0%</div>
          <div className="text-white text-sm lg:text-base">In progress</div>
        </article>

        {/* Scan Info */}
        <article className="flex-1 px-4 lg:px-8 flex flex-col gap-8 border-l-0 lg:border-l border-gray-600">

          {/* Scan Stages */}
          <div className="flex flex-wrap justify-between gap-6 text-center">
            {[ 
              { img: spidering, label: "Spidering" },
              { img: mapping, label: "Mapping" },
              { img: testing, label: "Testing" },
              { img: validating, label: "Validating" },
              { img: reporting, label: "Reporting" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center">
                <img src={item.img} alt={item.label} className="w-10 h-10" />
                <p className="text-gray-600 text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* Scan Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5 border-t border-gray-600">
            <div>
              <p className="text-gray-600">Scan Types</p>
              <p className="font-bold">Grey Box</p>
            </div>
            <div>
              <p className="text-gray-600">Targets</p>
              <p className="font-bold break-words">google.com</p>
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
              <p className="font-bold break-words">Control.pdf</p>
            </div>
            <div>
              <p className="text-gray-600">Checklists</p>
              <p className="text-teal-600">40/350</p>
            </div>
          </div>
        </article>
      </section>

      {/* Console Title */}
      <p className="font-bold mt-8 mb-4">Live Scans Console</p>

      {/* Logs Section */}
      <section className="flex flex-col lg:flex-row gap-6">

        {/* Active Log */}
        <article className="lg:w-1/2 border-r-0 lg:border-r border-gray-600 pr-0 lg:pr-4">
          <p className="text-gray-600 border-b border-gray-600 py-2">
            Active Log
          </p>

          <div className="max-h-96 overflow-y-auto">
            {scandatalog.map((item, index) => (
              <div className="mt-3 mr-2 text-sm" key={index}>
                <span className="text-gray-600">
                  [{item.timestamp}]
                </span>
                <span> {item.message}</span>
              </div>
            ))}
          </div>
        </article>

        {/* Finding Log */}
        <article className="lg:w-1/2">
          <p className="text-gray-600 border-b border-gray-600 px-2 py-2">
            Finding log
          </p>

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
              <div
                key={index}
                className="p-4 rounded-lg border mb-4 mt-3"
              >
                <div className="flex justify-between items-center">
                  <p
                    className={`px-3 py-1 text-xs rounded-full font-semibold ${colorClass}`}
                  >
                    {item.severity}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.time}
                  </p>
                </div>

                <div className="mt-3">
                  <p className="font-semibold text-lg">
                    {item.title}
                  </p>
                  <p className="text-teal-600">
                    {item.endpoint}
                  </p>
                  <p className="text-gray-600 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </article>
      </section>
    </main>
  );
}

export default Scan;