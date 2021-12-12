import PaginationButtons from "./PaginationButtons";

export default function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        Se encontraron {results.searchInformation?.formattedTotalResults} de resultados ({results.searchInformation?.formattedSearchTime} segundos)
      </p>

      {results ? 
        results.items?.map((result, index) => (
          <div key={index} 
            className="max-w-xl mb-8"
          >
            <div className="group">
              <a href={result.link} className="text-sml">
                {result.formattedUrl}
              </a>
              <a href={result.link}>
                <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">{result.title}</h2>
              </a>
            </div>
  
            <p className="line-clamp-2">{result.snippet}</p>
          </div>
        ))
        : (
          <div>
            Sin Resultados
          </div>
        )
      }

      <PaginationButtons />
    </div>
  )
}