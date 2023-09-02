import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {

	const router = useRouter()

	return ( 
		<div className="h-full w-full flex flex-col justify-center md:pl-28 pb-5">
			<div className="flex flex-col items-center md:items-start md:pt-36 justify-center gap-16">
				<div>
					<motion.h1 className={"text-gray-400 text-center font-noticia-text text-5xl md:text-5xl font-normal"}>AHMAD YOVAN</motion.h1>
					<motion.h1 className="text-[#7E00BA] text-center md:text-start font-noticia-text text-4xl md:text-4xl font-normal">PORTFOLIO</motion.h1>
				</div>
				<button className="w-48 h-14 border-2 border-[#7E00BA]">
        		  	<motion.a className="text-gray-400 font-noticia-text text-xl  font-normal cursor-pointer" onClick={() => router.push('/project')}>
        		  		see my project
        		  	</motion.a>
        		</button>
			</div>
			{/* <div className="h-fit flex items-end pl-[40%]">
				<motion.div initial={{ y: 0, rotate: -135 }} animate={{ y: [-10, 0, -10], rotate: -135 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-6 h-6 transform rotate-[-135deg] origin-center border-l-[3px] border-t-[3px] border-[#7E00BA]"></motion.div>
			</div> */}
		</div>
	)
}
