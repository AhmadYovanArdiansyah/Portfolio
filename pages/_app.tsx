import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import Scrollpage from '@/components/scroll-page'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {

	const router = useRouter()

    return(
		<div>
			<Layout>
				<Scrollpage>
					<AnimatePresence initial={false} mode='wait' >
						<Component key={router.pathname} {...pageProps} />
					</AnimatePresence>
				</Scrollpage>
			</Layout>
		</div>
		
    ) 
}
