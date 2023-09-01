import { motion } from 'framer-motion';
import { useRouter, usePathname } from 'next/navigation';
import { pages } from '@/components/pages-data'

const Menu = () => {
    const router = useRouter();
    const path = usePathname();

    const commonStyles = 'h-1 w-14 bg-[#7E00BA] cursor-pointer transition-all duration-700 ease-in';
    const activeStyle = 'active w-24';

    return (
        <div className="h-full flex flex-col items-end gap-9 mt-8 md:mt-48">
            {pages.map(({ pathname: pages }) => {
                const isActive = path === pages ? activeStyle : '';
                return <motion.div key={pages} whileHover={{scaleY: 1.5}} transition={{duration : 0}} className={`${commonStyles} ${isActive}`} onClick={() => router.push(pages)}></motion.div>
            })}
        </div>
    );
}

export default Menu