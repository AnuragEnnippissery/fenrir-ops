import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrFormSchedule } from "react-icons/gr";
import { BiMemoryCard } from "react-icons/bi";
import { Link} from "react-router-dom";
function Header(){
    return(
        <>
            
            <main>
                <section>
                    <nav>
                        <ul>
                            
                           <li>
                            <Link
                                to="/dashboard"
                                className="flex items-center gap-3 p-2 hover:bg-green-200  hover:text-green-700 rounded-md"
                            >
                                <MdOutlineDashboardCustomize className="text-xl" />
                                <span>Dashboard</span>
                            </Link>
                            </li>
                            <li>
                                <Link to =""
                                 className="flex items-center gap-3 p-2 hover:bg-green-200  hover:text-green-700 rounded-md"
                            >
                                <GrFormSchedule className="text-xl" />
                                <span>Projects</span>
                                </Link>
                            </li>
                            <li>
                                <Link to ="/dashboard/scan"
                                 className="flex items-center gap-3 p-2 hover:bg-green-200  hover:text-green-700 rounded-md"
                            >
                                <BiMemoryCard className="text-xl" />
                                    <span>Scans</span>
                                </Link>
                            </li>
                            <li>
                                <Link to =""
                                 className="flex items-center gap-3 p-2 hover:bg-green-200  hover:text-green-700 rounded-md"
                            >
                                <GrFormSchedule className="text-xl" />
                                
                                    <span>Schedule</span>
                                </Link>
                            </li>
                        </ul>
                        <hr></hr>
                        <ul>
                            <li>
                                <Link to =""
                                 className="flex items-center gap-3 p-2 hover:bg-green-200  hover:text-green-700 rounded-md"
                            >
                                <GrFormSchedule className="text-xl" />
                                    <span>Notifications</span>
                                </Link>
                            </li>
                            <li>
                               <Link to =""
                                 className="flex items-center gap-3 p-2 hover:bg-green-200  hover:text-green-700 rounded-md"
                            >
                                <GrFormSchedule className="text-xl" />
                                    <span>Settings</span>
                                </Link>
                            </li>
                            <li>
                                <Link to =""
                                 className="flex items-center gap-3 p-2 hover:bg-green-200  hover:text-green-700 rounded-md"
                            >
                                <GrFormSchedule className="text-xl" />
                                    <span>Support</span>
                                </Link>
                            </li>
                        </ul>
                        <hr></hr>
                        <ul className="mb-0">
                            <li>
                                <Link to ="/Login">
                                <span>Login</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </section>
                
            </main>
        </>
    )
}
export default Header;