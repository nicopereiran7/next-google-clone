import Avatar from "./Avatar";
import { ViewGridIcon } from "@heroicons/react/solid";

export default function NavBar() {
  return (
    <header className="flex w-full px-5 py-3 justify-between text-sm text-gray-700">
      {/*-- LEFT --*/}
      <div className="flex space-x-4 items-center">
        <a className="link">About</a>
        <a className="link">Store</a>
      </div>
      {/*-- right --*/}
      <div className="flex space-x-4 items-center">
        <a className="link">Images</a>
        <a className="link">Gmail</a>
        <ViewGridIcon className="w-10 object-cover p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
        <Avatar url="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png"/>
      </div>
    </header>
  )
}