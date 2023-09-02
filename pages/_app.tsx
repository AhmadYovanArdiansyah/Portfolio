import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout'
import Scrollpage from '@/components/scroll-page'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <Layout>
			<Scrollpage>
            	<AnimatePresence initial={false} mode='wait'>
                    <motion.div key={router.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{duration: .2}} className='h-full w-full'>
                        <Component {...pageProps} />
                    </motion.div>
            	</AnimatePresence>
			</Scrollpage>
        </Layout>
    );
}
