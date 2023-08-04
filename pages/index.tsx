import Head from 'next/head'


export default function Home() {
  return (
    <div className="">
      <Head children={
        <>
          <title>CatWiki</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </>
      } />

      <Header />

    </div>
  )
}
