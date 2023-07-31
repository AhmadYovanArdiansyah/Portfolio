import { useEffect, useState } from "react";
import { usePathname, useRouter } from 'next/navigation';
import { pages } from '@/components/pages-data'


const Scrollpage = ({ children }: { children: React.ReactNode }) => {

    const [current, setCurrent] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const goToPage = (n: number) => {
        
        router.push(pages[n].pathname);
        setCurrent(n);
    };

    const handleWheel = (event: WheelEvent) => {
        if (scrolling) return;
        setScrolling(true);

        if (event.deltaY > 0 && current < pages.length - 1) goToPage(current + 1); // scroll to down
        else if (event.deltaY < 0 && current > 0) goToPage(current - 1); // scroll to up

        setTimeout(() => setScrolling(false), 1000);
    };

    useEffect(() => {
        const initialCurrent = pages.findIndex((pages) => pages.pathname === pathname);
        setCurrent(initialCurrent);

        const handleWheel = (event: WheelEvent) => {
            if (scrolling) return;
            setScrolling(true);
    
            if (event.deltaY > 0 && current < pages.length - 1) goToPage(current + 1); // scroll to down
            else if (event.deltaY < 0 && current > 0) goToPage(current - 1); // scroll to up
    
            setTimeout(() => setScrolling(false), 1000);
        };

        document.addEventListener("wheel", handleWheel);

        return () => {
            document.removeEventListener("wheel", handleWheel);
        };
    }, [handleWheel, pathname]);

    return (
        <div className="h-full w-full">
            {children}
        </div>
    ) 
};

export default Scrollpage;
