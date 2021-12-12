import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "../Avatar";
import HeaderOptions from "./HeaderOptions";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  useEffect(() => {
    if (!router.query.term) return;

    searchInputRef.current.value = router.query?.term;
  }, [router.query]);

  const resetSearchInputValue = () => {
    searchInputRef.current.value = "";
  };

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top=0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            className="h-7 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125"
            onClick={resetSearchInputValue}
          />
          <MicrophoneIcon className="mr-3 h-6 cursor-pointer hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="mr-3 h-6 cursor-pointer hidden sm:inline-flex text-blue-500" />
          <button hidden type="submit" onClick={search}>
            Buscar
          </button>
        </form>
        <Avatar
          url="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"
          className="ml-auto"
        />
      </div>

      <HeaderOptions />
    </header>
  );
}
