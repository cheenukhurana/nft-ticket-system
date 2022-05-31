import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <div className='h-screen'>
            <div className='mx-auto'>
                <Head>
                    <title>NFT Ticket System</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <header className="text-center text-white bg-gray-700">
                    <h1 className="text-3xl py-4">NFT Ticket System</h1>
                </header>
                <main className="mx-[10%]">
                    {children}
                </main>
            </div>
        </div>
    )
}