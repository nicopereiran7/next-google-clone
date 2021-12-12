import ItemOption from "./ItemOption";
import {
  SearchIcon,
  MapIcon,
  DotsVerticalIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon
} from "@heroicons/react/outline";

const OPTIONS = [
  { icon: SearchIcon, title: "Todos", isSelected: true },
  { icon: PhotographIcon, title: "Imagenes", isSelected: false},
  { icon: PlayIcon, title: "Videos", isSelected: false},
  { icon: NewspaperIcon, title: "Noticias", isSelected: false},
  { icon: MapIcon, title: "Mapa", isSelected: false},
  { icon: DotsVerticalIcon, title: "Mas", isSelected: false},
]

export default function HeaderOptions() {
  return (
    <div className="flex justify-evenly w-full text-gray-700 text-xs lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
      <div className="flex space-x-6">
        {OPTIONS.map((option, index) => (
          <ItemOption key={index} Icon={option.icon} title={option.title} selected={option.isSelected}/>
        ))}
      </div>
      <div className="flex space-x-4">
        <p className="link">Configuraciones</p>
        <p className="link">Herramientas</p>
      </div>
    </div>
  )
}
