import { useState } from "react";
function Login(){
    let [fname,setFname]=useState();
    let [lname,setLname]=useState();
    let [password,setPassword]=useState();
    let[email,setEmail]=useState();

    
    return(
        <>
           <main className="flex bg-green-950 min-h-screen">
                <section className="text-white">
                    <h3 className="text-3xl font-bold text-white">Expert level CyberSecurity in hours not weeks</h3>
                    <p>What's included</p>
                    <p>Effortlessly spider and map targets to uncover hidden security flaws</p>
                    <p>Deliver high-quality , validated findings in hours , not weeks.</p>
                    <p>Generate professional , enterprise -grade security reports automatically.</p>
                </section>
                <section>
                    
                    <form  className=" bg-white">
                        <section>
                            <p>Sign Up</p>
                            <p>Already have an account ? Log In </p>
                        </section>
                        <section className="flex flex-col gap-4 border border-amber-500 p-4">
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
                            <button type="submit"  className="bg-[#0CC8A8] text-white p-2 rounded">Create Account</button>
                        </section>   
                           
                    </form>
                </section>
            </main>
        </>
    )
}
export default Login;