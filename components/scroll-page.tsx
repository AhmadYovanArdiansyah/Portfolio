import { useEffect, useState, useCallback } from "react";
import { useRouter } from 'next/router';
import { pages } from '@/components/pages-data';

const Scrollpage = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const pathname = router.pathname;
  
    const [current, setCurrent] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [isNavigating, setIsNavigating] = useState(false);
    const [scrollEnabled, setScrollEnabled] = useState(true);
  
    const goToPage = useCallback(
      (n: number) => {
        if (isNavigating) return; // Tambahkan pengecekan isNavigating
  
        setIsNavigating(true);
        router.push(pages[n].pathname);
        setCurrent(n);
      },
      [router, isNavigating]
    );
  
    const handleWheel = useCallback(
      (event: WheelEvent) => {
        if (scrolling || !scrollEnabled) return;
  
        const current = pages.findIndex((page) => page.pathname === pathname);
  
        if (event.deltaY > 0 && current < pages.length - 1) {
          goToPage(current + 1);
        } else if (event.deltaY < 0 && current > 0) {
          goToPage(current - 1);
        }
      },
      [scrolling, scrollEnabled, pathname, goToPage]
    );
  
    useEffect(() => {
      const handleRouteChange = () => {
        setScrolling(true);
        setTimeout(() => setScrolling(false), 1000);
      };
  
      router.events.on("routeChangeComplete", handleRouteChange);
  
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }, [router.events]);

    // New state for touch slide support
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // New touch slide event handler
  const handleTouchStart = useCallback((event: TouchEvent) => {
    setTouchStart(event.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    setTouchEnd(event.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (scrolling || !scrollEnabled) return;

    const current = pages.findIndex((page) => page.pathname === pathname);
    const touchDiff = touchEnd - touchStart;

    if (touchDiff < 0 && current < pages.length - 1) {
      goToPage(current + 1);
    } else if (touchDiff > 0 && current > 0) {
      goToPage(current - 1);
    }
  }, [scrolling, scrollEnabled, pathname, touchEnd, touchStart, goToPage]);

  useEffect(() => {
    // Add touch event listeners
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      // Remove touch event listeners when component unmounts
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);
  
    useEffect(() => {
      const initialCurrent = pages.findIndex((page) => page.pathname === pathname);
      setCurrent(initialCurrent);
  
      const handleDocumentWheel = (event: WheelEvent) => handleWheel(event);
      document.addEventListener("wheel", handleDocumentWheel);
  
      return () => {
        document.removeEventListener("wheel", handleDocumentWheel);
      };
    }, [pathname, handleWheel]);
  
    useEffect(() => {
      if (isNavigating) {
        // Reset isNavigating after 500ms (adjust the duration as needed)
        setTimeout(() => setIsNavigating(false), 500);
      }
    }, [isNavigating]);
  
    return (
      <div className="h-full w-full">
        {children}
      </div>
    );
  };
  
export default Scrollpage;
  
