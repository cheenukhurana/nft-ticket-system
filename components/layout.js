import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
    return (
        <div className='h-screen'>
            <div className='mx-auto'>
                <Head>
                    <title>NFT Ticket System</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                </Head>
                <header className="text-white bg-gray-600 py-4 text-3xl text-center">
                    NFT Ticket System
                    <p className="text-base inline-block float-right p-2"><Link href="/list-your-show"><a>List your show</a></Link></p>
                </header>
                <main className="mx-[10%]">
                    {children}
                </main>
            </div>
        </div>
    )
}