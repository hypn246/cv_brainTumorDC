'use server'
import landing from "../../public/—Pngtree—abstract wavy structure with millions_1224363.jpg"

export default async function Home() {
  return (
   <>
   <div className="section-1 w-full h-full" 
        style={{backgroundImage:`url(${landing.src})`}}>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center m-0">
        <div className="intro">
          <h1 className="py-6">ENSURE PRECISENESS IN YOUR HEALTH DIAGNOSE</h1>
          <p className="space-x-2">Experience cutting-edge health technology with NEUROS. From AI-powered symptom checkers to personalized health trackers, our innovative tools are designed to support your well-being.</p>
          
          <div className="gd1 w-fit my-6 rounded-2xl">
          <button className="btn-ditat rounded-2xl bg-transparent text-black p-3">Start now</button>
          </div>
        </div>
        <div className="intro1"></div>
      </div>
    </div>

  <div className="h-[100vh] relative">
    <div className="backdrop">
      {/* <div className="shape2"></div> */}
    </div>

    <div className="absolute">
      {/* content here */}
    </div>
  </div>
   </>
  );
}
