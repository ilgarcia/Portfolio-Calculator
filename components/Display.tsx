import { MdHistory } from "react-icons/md";

function Display() {
  return (
    <div className="relative px-3 py-2 w-full h-24 bg-gray-800 rounded">
      <div className="flex justify-between items-center text-slate-400">
        <div className="text-2xl"><MdHistory /></div>
        <div className="font-tektur">0</div>
      </div>
      <div className="absolute right-3 bottom-2 text-4xl text-white font-tektur">0</div>
    </div>
  )
}

export default Display