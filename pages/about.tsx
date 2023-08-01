import { motion } from "framer-motion";

const About = () => {

    const animation = {
        enter: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0}
      }

    return (
        <motion.div variants={animation} initial="enter" animate="show" exit="exit" transition={{duration: .5}} className="h-full w-full absolute flex flex-col justify-center pb-24 gap-14">
            <motion.div className="text-2xl font-play text-gray-400">
                <p className="w-[30rem]">
                    Hello there! I m Ahmad Yovan <br/>a passionate web developer with a flair for creativity and a background in various programming languages. Although I m relatively new to web development, I ve already built a strong foundation in HTML, CSS, and JavaScript.
                </p>
            </motion.div>
        </motion.div>
        
    );
};

export default About;
