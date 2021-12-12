import Head from "next/head";
import { useRouter } from "next/router";
import SearchHeader from "../components/search/SearchHeader";
import axios from "axios";
import { API_KEY, CONTEXT_KEY } from "../keys";
import SearchResults from "../components/search/SearchResults";

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{`Resultados de Busqueda | ${router.query.term}`}</title>
        <link rel="icon" href="/google.ico" />
      </Head>
     
      <SearchHeader /> 

      <SearchResults results={results} />
    </div>
  )
}

export default Search;

export async function getServerSideProps(context) {
  const useData = false;
  const startIndex = context.query.start || '0';

  const response = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  )

  return {
    props: {
      results: response.data
    }
  }
}