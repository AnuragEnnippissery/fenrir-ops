import { useState } from "react";
import googleImg from "../../assets/google_img.png";
import appleImg from "../../assets/apple_img.png";
import metaImg from "../../assets/meta_img.png";
import { useNavigate } from "react-router-dom";

function Login() {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-linear-to-br from-black via-gray-900 to-orange-500">
      
      {/* LEFT SECTION */}
      <section className="text-white px-6 py-10 md:p-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        
        <h1 className="text-2xl md:text-4xl font-bold leading-snug">
          Expert level CyberSecurity in
          <span className="text-teal-400"> hours </span> not weeks
        </h1>

        <div className="mt-8 space-y-4 max-w-md">
          <p className="font-semibold">What's included</p>
          <p>Effortlessly spider and map targets to uncover hidden security flaws</p>
          <p>Deliver high-quality, validated findings in hours, not weeks.</p>
          <p>Generate professional, enterprise-grade security reports automatically.</p>

          <div className="pt-6">
            <p className="font-semibold">Trust pilot</p>
            <p>Rated 4.5/5 (100k+ reviews)</p>
          </div>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="flex justify-center items-center px-4 py-10 md:py-0">
        
        <form className="bg-white w-full max-w-md shadow-xl p-6 md:p-8 rounded-xl">
          
          <div className="mb-6 text-center space-y-2">
            <p className="text-2xl md:text-3xl font-bold">Sign Up</p>
            <p className="text-sm">
              Already have an account?
              <span className="text-blue-500 cursor-pointer"> Log In</span>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            
            <input
              type="text"
              placeholder="First Name *"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="text"
              placeholder="Last Name *"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="email"
              placeholder="Email Address *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            <input
              type="password"
              placeholder="Password (8+ characters)*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            />

            <p className="text-xs text-gray-600">
              I agree to apps term and condition and acknowledge the privacy policy
            </p>

            <button
              type="button"
              className="bg-[#0CC8A8] hover:bg-teal-600 transition text-white p-3 rounded-full font-semibold"
              onClick={() => navigate("/dashboard")}
            >
              Create Account
            </button>

            <div className="flex justify-center gap-4 pt-4">
              <button>
                <img src={appleImg} alt="Apple" className="w-8 h-8" />
              </button>
              <button>
                <img src={googleImg} alt="Google" className="w-8 h-8" />
              </button>
              <button>
                <img src={metaImg} alt="Meta" className="w-8 h-8" />
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;