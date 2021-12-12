import { useRouter } from "next/router";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function PaginationButtons() {
  const router = useRouter();
  console.log(router.query);

  const startIndex = Number(router.query.start) || 0;

  return (
    <div className="flex items-center">
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer transition duration-300 hover:underline">
            <ChevronLeftIcon className="h-5"/>
            <p>Anterior</p>
          </div>
        </Link>
      )}

      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer transition duration-300 hover:underline">
          <ChevronRightIcon className="h-5"/>
          <p>Siguiente</p>
        </div>
      </Link>
    </div>
  )
}