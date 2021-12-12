import { GlobeIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-xs text-gray-500">
      <div className="px-8 py-3">
        <p>Temuco</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700"/>
          <p>Carbono Neutral desde 2007</p>
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Sobre Google</p>
          <p>Negocio</p>
          <p>Como funciona la Busqueda</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Privacidad</p>
          <p>Servicios</p>
          <p>Configuracion</p>
        </div>
      </div>
    </footer>
  )
}