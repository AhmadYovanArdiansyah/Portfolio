import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .5}} className="h-full w-full absolute flex flex-col pt-24 gap-14">
            <motion.div className=" text-2xl font-play text-gray-200 mx-32 text-center">
                <p>
                    Hello there! I'm Ahmad Yovan, a passionate web developer with a flair for creativity and a background in various programming languages. Although I'm relatively new to web development, I've already built a strong foundation in HTML, CSS, and JavaScript.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default About;
