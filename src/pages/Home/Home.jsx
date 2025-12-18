
import Hero from "./components/Hero.jsx"
import QuickCard from "./components/QuickCard.jsx"
export default function Home (){
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">

             <main className="mx-auto max-w-6xl px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <Hero/>
                  
                </div>
             </main>
        </div> 
    )
}