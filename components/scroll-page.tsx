import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { pages } from "@/components/pages-data";

const Scrollpage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const currentPageIndex = pages.findIndex((page) => page.pathname === router.pathname);

  const goToPage = useCallback(
    (pageIndex: number) => {
      if (isNavigating || pageIndex < 0 || pageIndex >= pages.length) return;
      setIsNavigating(true);
      router.push(pages[pageIndex].pathname);
      setTimeout(() => setIsNavigating(false), 500);
    },
    [router, isNavigating]
  );

  const handleRouteChange = useCallback(() => {
    setScrolling(true);
    setTimeout(() => setScrolling(false), 1000);
  }, []);

  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (scrolling) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextPage = (currentPageIndex + direction + pages.length) % pages.length;
      goToPage(nextPage);
    },
    [scrolling, currentPageIndex, goToPage]
  );

  const handleTouchStart = useCallback((event: TouchEvent) => {
    const { clientY } = event.touches[0];
    setTouchStart(clientY);
    setTouchEnd(clientY);
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    setTouchEnd(event.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (scrolling) return;
    const touchDiff = touchEnd - touchStart;
    const direction = touchDiff < -50 ? 1 : touchDiff > 50 ? -1 : 0;
    const nextPage = (currentPageIndex + direction + pages.length) % pages.length;
    goToPage(nextPage);
    setTouchStart(0);
    setTouchEnd(0);
  }, [scrolling, currentPageIndex, touchEnd, touchStart, goToPage]);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, handleRouteChange]);

  useEffect(() => {
    document.addEventListener("wheel", handleWheel);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  return <div className="h-full w-full">{children}</div>;
};

export default Scrollpage;
