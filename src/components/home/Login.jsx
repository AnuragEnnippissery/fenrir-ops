import { useState } from "react";
import googleImg from "../../assets/google_img.png";
import appleImg from "../../assets/apple_img.png";
import metaImg from "../../assets/meta_img.png";
function Login(){
    let [fname,setFname]=useState();
    let [lname,setLname]=useState();
    let [password,setPassword]=useState();
    let[email,setEmail]=useState();

    
    return(
        <>
           {/* <main className="flex bg-teal-950 min-h-screen"> */}
           <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-500">
                <section className="text-white  p-10 mx-3.5  flex flex-col justify-between align-center">
                    <div className="text-3xl font-bold text-white gap-8">Expert level CyberSecurity in
                         <span className="text-teal-900"> hours </span> not weeks</div>
                    <div>
                        <p>What's included</p>
                        <p>Effortlessly spider and map targets to uncover hidden security flaws</p>
                        <p>Deliver high-quality , validated findings in hours , not weeks.</p>
                        <p>Generate professional , enterprise -grade security reports automatically.</p>
                        <p>Trust pilot</p>
                        <p>Rated 4.5/5 (100k+ reviews)</p>
                    </div>
                    
                </section>

                {/* rigth part */}
                <section  className="flex justify-center items-center min-h-screen">
                    
                    <form  className=" bg-white   max-w-md  border  p-8 rounded-md"   >
                        <section className="gap-5 p-5">
                            <p className="text-3xl font-bold text-center">Sign Up</p>
                            <p className="text-center">Already have an account ?<span className="text-blue-500"> Log In</span></p>
                        </section>
                        <section className="flex flex-col gap-4  p-4">
                             <input 
                            type="text" 
                            placeholder="First Name *"
                            value={fname || ""} 
                            onChange={(event) => setFname(event.target.value)} 
                            className="border  p-2 rounded"
                            />
                            
                            <input 
                            type="text" 
                            placeholder="Last Name *"
                            value={lname || ""} 
                            onChange={(event) => setLname(event.target.value)} 
                            className="border p-2 rounded"
                            />
                            <input 
                            type="text" 
                            placeholder="Email Address *"
                            value={email || ""} 
                            onChange={(event) => setEmail(event.target.value)} 
                            className="border p-2 rounded"
                            />
                            <input 
                            type="text" 
                            placeholder="Password (8+ characters)*"
                            value={password || ""} 
                            onChange={(event) => setPassword(event.target.value)} 
                            className="border p-2 rounded"
                            />
                            <p>I agree to apps term and condition and acknowledge the privacy policy</p>
                            <button type="submit"  className="bg-[#0CC8A8] text-white p-2 rounded-full">Create Account</button>
                            <div className="flex justify-center gap-3">
                                <button>
                                    <img src={appleImg} alt="Apple"  />
                                </button>
                                <button>
                                    <img src={googleImg} alt="Google"  />
                                </button>
                                <button>
                                    <img src={metaImg} alt="meta"  />
                                </button>
                            </div>
                        </section>   
                           
                    </form>
                </section>
            </main>
        </>
    )
}
export default Login;