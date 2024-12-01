import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true); 
  const router = useRouter();

 

  return (
    <>
      {/*  {loading && (
        <div className="loader-overlay">
          <span className="loader"></span>
        </div>
      )}*/}
      <Head>
				<title>Hardik Vij</title>
				<link
					rel="apple-touch-icon"
					href="/favicon.ico"
					type="image"
					sizes="any"
				/>
				<link rel="icon" href="/favicon.ico" type="image" sizes="any" />
				<link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Toaster position="top-center" />
      <Component { ...pageProps } />
        <div className="px-4 lg:py-7 py-7 text-white">
        <div className="lg:flex lg:flex-row lg:items-center lg:justify-between  container mx-auto lg:w-[90%] w-full flex flex-col lg:space-y-0 space-y-4 text-center">
          <p className="text-md text-white/80 ">
          Copyright ©2024 Hardik Vij
        </p>
       
       <div className="flex lg:space-x-4 items-center justify-between">
          <a
            href="#"
            className="hover:scale-125 transition duration-300"
          >
            <img src="/about/social-media/facebook.png" className="w-10 h-10"/>
          </a>
          <a
            href="#"
            className="hover:scale-125 transition duration-300"
          >
            <img src="/about/social-media/linkedin.png" className="w-10 h-10"/>
          </a>
          <a
            href="#"
           className="hover:scale-125 transition duration-300"
          >
            <img src="/about/social-media/whatsapp.png" className="w-10 h-10"/>
            </a>
            <a
            href="#"
           className="hover:scale-125 transition duration-300"
          >
            <img src="/about/social-media/instagram.png" className="w-10 h-10"/>
            </a>
            <a
            href="#"
           className="hover:scale-125 transition duration-300"
          >
            <img src="/about/social-media/github.png" className="w-10 h-10"/>
          </a>
        </div>

      
        </div>
        </div>
    </>
  );
}
