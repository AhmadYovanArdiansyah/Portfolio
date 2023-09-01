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

  // Fungsi untuk pindah ke halaman berikutnya atau sebelumnya
  const goToPage = useCallback(
    (pageIndex: number) => {
      if (isNavigating || pageIndex < 0 || pageIndex >= pages.length) return;
      setIsNavigating(true);
      router.push(pages[pageIndex].pathname);
      setTimeout(() => setIsNavigating(false), 0);
    },
    [router, isNavigating]
  );

  // Callback untuk menangani perubahan rute
  const handleRouteChange = useCallback(() => {
    setScrolling(true);
    setTimeout(() => setScrolling(false), 1000);
  }, []);

  // Callback untuk menangani scroll dengan mouse
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      if (scrolling) return;
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextPage = (currentPageIndex + direction + pages.length) % pages.length;
      goToPage(nextPage);
    },
    [scrolling, currentPageIndex, goToPage]
  );

  // Callback untuk menyimpan posisi awal sentuhan
  const handleTouchStart = useCallback((event: TouchEvent) => {
    const { clientY } = event.touches[0];
    setTouchStart(clientY);
    setTouchEnd(clientY);
  }, []);

  // Callback untuk memperbarui posisi akhir sentuhan
  const handleTouchMove = useCallback((event: TouchEvent) => {
    setTouchEnd(event.touches[0].clientY);
  }, []);

  // Callback untuk menangani akhir sentuhan
  const handleTouchEnd = useCallback((event: TouchEvent) => {
    if (scrolling) return;
    const touchDiff = touchEnd - touchStart;
    const direction = touchDiff < -50 ? 1 : touchDiff > 50 ? -1 : 0;
    const nextPage = (currentPageIndex + direction + pages.length) % pages.length;
    goToPage(nextPage);
    setTouchStart(0);
    setTouchEnd(0);
  }, [scrolling, currentPageIndex, touchEnd, touchStart, goToPage]);

  // Mengikuti perubahan rute
  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events, handleRouteChange]);

  // Mengganti event listener untuk mouse dan sentuhan
  useEffect(() => {
    document.addEventListener("wheel", handleWheel);
    document.addEventListener("touchstart", handleTouchStart, { passive: false });
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
