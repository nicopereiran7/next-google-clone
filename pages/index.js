import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import SearchForm from '../components/SearchForm'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Next Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/google.ico" />
      </Head>
      <NavBar />

      <SearchForm />

      <Footer />
    </div>
  )
}
