import Menu from "@/components/page-archor";
import Navbar from "@/components/navbar";
import Background from "@/components/hero-background";
import { Noticia_Text } from 'next/font/google'

const font = Noticia_Text({
	subsets: ['latin-ext'],
	weight: ['400', '700']
})

const Layout = ({ children }: { children: React.ReactNode }) => {	

    return (
        <main className={'h-screen w-screen flex flex-col items-center' + font.className}>
          	<div className='h-full max-w-[1366px] w-full flex flex-col justify-start relative overflow-hidden'>
	    		<div className='h-28 w-full'>
	    			<Navbar />
	    		</div>
          	  	<div className="flex-1 w-full flex flex-col-reverse md:flex-row items-center gap-20 md:px-20 z-10">
          	  	  	<div className='h-full w-24 hidden md:block'>
	    			  	<Menu />
	    			</div>
          	  	  	<div className="h-full flex-1 relative">
	    				{children}
          	  	  	</div>
          	  	</div>
				<Background />
          	</div>
        </main>
    );
};

export default Layout;