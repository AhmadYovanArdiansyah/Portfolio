import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Home() {

	const router = useRouter()

	return ( 
		<motion.div initial={{ opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .5}} className="h-full w-full absolute flex flex-col pb-5 pt-56">
			<div className="h-fit flex flex-col items-start gap-10">
				<div>
					<motion.h1 className={"text-gray-300 font-noticia-text text-5xl font-normal"}>AHMAD YOVAN</motion.h1>
					<motion.h1 className="text-[#7E00BA] font-noticia-text text-4xl font-normal">PORTFOLIO</motion.h1>
				</div>
				<button className="border-[2px] border-[#7E00BA] flex justify-center items-center p-2">
        		  	<motion.a className="text-gray-300 font-noticia-text font-normal cursor-pointer" onClick={() => router.push('/project')}>
        		  		see my project
        		  	</motion.a>
        		</button>
			</div>
			<div className=" flex-1 flex items-end ml-40">
				<motion.div initial={{ y: 0, rotate: -135 }} animate={{ y: [-10, 0, -10], rotate: -135 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-6 h-6 transform rotate-[-135deg] origin-center border-l-4 border-t-4 border-[#7E00BA]"></motion.div>
			</div>
		</motion.div>
	)
}
