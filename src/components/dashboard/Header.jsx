
import { Link} from "react-router-dom";
function Header(){
    return(
        <>
            <h2>Header</h2>
            <main>
                <section>
                    <nav>
                        <ul>
                            <li>
                                <Link to ="/Login">
                                <span>Login</span>
                                </Link>
                            </li>
                            <li>
                                <Link to ="/Dashboard">
                                    <span>Dashboard</span>
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