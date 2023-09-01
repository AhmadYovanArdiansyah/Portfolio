import { motion } from "framer-motion";

const About = () => {

  return (
    <div className="h-full w-full flex flex-col justify-center pb-24 gap-14">
      <motion.div className="text-xl md:text-2xl px-10 font-play text-gray-400 text-center">
        <p>
            <span className="text-2xl md:text-3xl">Hello there!</span> I&apos;m Ahmad Yovan, a web development enthusiast with a passion for programming. 
            I&apos;m currently focusing on mastering JavaScript, while also 
            exploring Next.js Framework to build advanced web applications. Besides, I&apos;ve dabbled in
            C++, Java, PHP, and game development with Unity.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
