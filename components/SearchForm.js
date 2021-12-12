import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import { MicrophoneIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function SearchForm() {
  const router = useRouter()
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    
    if(!term) return

    router.push(`/search?term=${term}`);
  }

  return (
    <form className="flex flex-col items-center justify-center flex-grow w-4/5">
      <Image 
        src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        width={300}
        height={100}
      />
      <div className="flex items-center w-full mt-5 transition-shadow duration-300 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 sm:max-w-xl">
        <SearchIcon className="w-5 mr-3 text-gray-500"/>
        <input type="text" className="flex-grow focus:outline-none" ref={searchInputRef}/>
        <MicrophoneIcon className="w-5 text-gray-500"/>
      </div>

      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button className="btn" onClick={search}>Buscar en Google</button>
        <button className="btn">Me siento con suerte</button>
      </div>
    </form>
  )
}