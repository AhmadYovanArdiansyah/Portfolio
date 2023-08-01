import { usePathname } from "next/navigation";

interface LineStyles {
    [key: string]: {
        styles: string;
    }[];
}

const pathStyles: LineStyles = {
    '/': [
        { styles: 'bottom-0 left-[55%] scale-y-[180]' },
        { styles: 'bottom-0 left-[57%] scale-y-[250]' },
        { styles: 'top-0 left-[25%] scale-y-[80]' },
        { styles: 'top-0 left-[27%] scale-y-[140]' },
    ],
    '/about': [
        { styles: 'bottom-0 left-[55%] scale-y-[250]' },
        { styles: 'bottom-0 left-[57%] scale-y-[100]' },
        { styles: 'top-0 left-[25%] scale-y-[140]' },
        { styles: 'top-0 left-[27%] scale-y-[80]' },
    ],
    '/project': [
        { styles: 'bottom-0 left-[55%] scale-y-[180]' },
        { styles: 'bottom-0 left-[57%] scale-y-[250]' },
        { styles: 'top-0 left-[25%] scale-y-0' },
        { styles: 'top-0 left-[27%] scale-y-0' },
    ],
};

export default function Background() {
    const path = usePathname();
    const activeLines = pathStyles[path] || pathStyles['/']; // Fallback to default styles

    return (
        <div className="h-fit w-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute h-[130vh]  md:h-screen w-[140vw] object-cover md:w-screen top-0 " width="1366" height="668" viewBox="0 0 1366 668" fill="none">
              <g filter="url(#filter0_f_891_2)">
                <path d="M1126.57 -231.339C1051.74 -248.091 855.707 -288.678 670.264 -317.009C613.217 -288.56 494.347 -229.979 475.249 -223.238C456.151 -216.498 298.142 -150.628 221.524 -118.536C195.357 -43.7184 139.568 113.627 125.752 144.469C111.936 175.311 102.594 243.444 99.6501 273.655C136.051 228.579 215.336 129.455 241.264 93.5741C273.674 48.7226 389.794 -18.0007 410.519 -33.8733C427.1 -46.5714 508.085 -64.9674 546.505 -72.5782C608.791 -84.2566 735.738 -106.549 745.242 -102.292C757.122 -96.9701 840.933 -78.5451 864.692 -67.9018C888.452 -57.2584 995.348 3.70872 1014.69 18.413C1030.17 30.1765 1095.65 135.849 1126.45 187.215L1197.07 343.63L1131.39 454.078L1003.99 582.162L856.447 700.217L843.335 868.429C891.142 882.801 989.357 912.106 999.761 914.352C1012.77 917.159 1131.82 942.313 1142.1 933.837C1152.38 925.361 1253.28 811.568 1276.28 800.741C1294.68 792.079 1344.52 661.919 1367.13 597.922L1458.26 353.968L1455.06 68.7631L1269.45 -82.8076L1126.57 -231.339Z" fill="#7E00BA" fillOpacity="0.73"/>
                <path d="M1126.57 -231.339C1051.74 -248.091 855.707 -288.678 670.264 -317.009C613.217 -288.56 494.347 -229.979 475.249 -223.238C456.151 -216.498 298.142 -150.628 221.524 -118.536C195.357 -43.7184 139.568 113.627 125.752 144.469C111.936 175.311 102.594 243.444 99.6501 273.655C136.051 228.579 215.336 129.455 241.264 93.5741C273.674 48.7226 389.794 -18.0007 410.519 -33.8733C427.1 -46.5714 508.085 -64.9674 546.505 -72.5782C608.791 -84.2566 735.738 -106.549 745.242 -102.292C757.122 -96.9701 840.933 -78.5451 864.692 -67.9018C888.452 -57.2584 995.348 3.70872 1014.69 18.413C1030.17 30.1765 1095.65 135.849 1126.45 187.215L1197.07 343.63L1131.39 454.078L1003.99 582.162L856.447 700.217L843.335 868.429C891.142 882.801 989.357 912.106 999.761 914.352C1012.77 917.159 1131.82 942.313 1142.1 933.837C1152.38 925.361 1253.28 811.568 1276.28 800.741C1294.68 792.079 1344.52 661.919 1367.13 597.922L1458.26 353.968L1455.06 68.7631L1269.45 -82.8076L1126.57 -231.339Z" stroke="black"/>
              </g>
              <defs>
                <filter id="filter0_f_891_2" x="-301.009" y="-717.527" width="2159.77" height="2053.6" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                  <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_891_2"/>
                </filter>
              </defs>
            </svg>
            {/* {activeLines.map((line, index) => (
                <div key={index} className={`absolute h-1 w-2 bg-[#7E00BA] transform rotate-45 transition-all duration-700 ease-in ${line.styles}`}></div>
            ))} */}
        </div>
    );
}