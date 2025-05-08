import Link from "next/link";
import Tweets from "../components/Tweets";


export default function HomePage(){
    return(
        <main className="bg-blue-200 p-10 text-center">
            <div>
                <h1 className="text-5xl font-bold mt-20">Welcome to Let's Tweet!</h1>
                <p className="text-2xl font-sans m-3">Share your thoughts.Explore trending tweets.<br/> Connect with the world.</p>
                <Link href="/TweetPages">
                    <button className="border-none rounded-4xl w-56 h-15 bg-blue-600 text-white text-2xl font-semibold m-2">Let's Tweet</button>
                </Link>
            </div>
            <div className="grid grid-cols-2 gap-1 text-start mt-10">
                <section className="bg-white">
                    <h1 className="text-2xl font-bold m-5">Explore Tweets</h1>
                    <Tweets/>
                </section>
                <div className="grid grid-rows-2 gap-1">
                    <section className="bg-white">
                        <h1 className="text-2xl font-bold mt-4 ml-4 mb-3">Trending Now</h1>
                        <ul className="ml-4">    
                            <li><Link href="#" className="text-blue-500 font-medium">#TrendingTag1</Link></li>
                            <li><Link href="#" className="text-blue-500 font-medium">#TrendingTag2</Link></li>
                            <li><Link href="#" className="text-blue-500 font-medium">#TrendingTag3</Link></li>
                        </ul>
                    </section>
                    <section className="bg-white">
                        <h1 className="text-2xl font-bold m-4">Why Join Let's Tweet</h1>
                        <ul>
                            <li><input type="text" className="border-1 m-3" placeholder="Type here"></input></li>
                            <li><input type="text" className="border-1 m-3" placeholder="Type here"></input></li>
                            <li><input type="text" className="border-1 m-3" placeholder="Type here"></input></li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    )
}