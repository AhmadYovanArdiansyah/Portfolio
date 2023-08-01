import { useEffect, useState, useCallback } from "react";
import { useRouter } from 'next/router';
import { pages } from '@/components/pages-data';

const Scrollpage = ({ children }: { children: React.ReactNode }) => {

    const [current, setCurrent] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const router = useRouter();
    const pathname = router.pathname
    

    const goToPage = useCallback((n: number) => {
        router.push(pages[n].pathname);
        setCurrent(n);
    }, [router]);

    const handleWheel = useCallback((event: WheelEvent) => {
        if (scrolling) return;
        setScrolling(true);

        if (event.deltaY > 0 && current < pages.length - 1) goToPage(current + 1); // scroll down
        else if (event.deltaY < 0 && current > 0) goToPage(current - 1); // scroll up

        setTimeout(() => setScrolling(false), 1000);
    }, [scrolling, current, goToPage]);


    useEffect(() => {
        const handleRouteChange = () => {
          setScrolling(true);
          setTimeout(() => setScrolling(false), 1000);
        };
    
        router.events.on('routeChangeComplete', handleRouteChange);
    
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
        };
      }, [router.events]);
    

    useEffect(() => {

        const initialCurrent = pages.findIndex((page) => page.pathname === pathname);
        setCurrent(initialCurrent);

        const handleDocumentWheel = (event: WheelEvent) => handleWheel(event); // Create a separate function to call handleWheel
        document.addEventListener("wheel", handleDocumentWheel);

        return () => {
            document.removeEventListener("wheel", handleDocumentWheel);
        };
    }, [handleWheel, pathname]);

    return (
        <div className="h-full w-full">
            {children}
        </div>
    ) 
};

export default Scrollpage;
