import React from "react";
import MennuBar from "../menuBar";

export const SearhBar = () => {
  return (
    <div className="m7-10 my-4">
      <div className="flex justify-evenly">
        <div className="pt-2 relative  text-black-900 w-5/12">
          <input
            className="border-2 border-gray-300 bg-gray-300 h-9 pl-8 pr-4 rounded-md text-sm focus:outline-none w-full"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute left-2 top-0 mt-4 mr-4">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-black-900 "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="pt-2 relative  text-black-900 w-1/2 flex gap-x-4">
          <div className="w-4/5">
            <input
              className="border-2 border-gray-300 bg-gray-300 h-9 pl-8 pr-4 rounded-md text-sm focus:outline-none w-full "
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute left-2 top-0 mt-4 mr-4">
              <svg
                className="w-5 h-5 text-black-900 "
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.39041 11.2868C5.51241 10.8684 5.81481 10.1308 6.18081 9.80125L4.60961 11.2868C4.48761 10.8684 4.18521 10.1304 3.81921 9.80125L4.07 9.52245C4.06999 9.52245 4.06999 9.52244 4.06998 9.52244C3.99958 9.45911 3.88778 9.38492 3.78477 9.31683C3.76405 9.30313 3.74264 9.28903 3.72054 9.27447C3.62005 9.20825 3.50549 9.13277 3.37836 9.04482C3.0694 8.83108 2.69724 8.55104 2.33831 8.19764C1.62002 7.49041 0.975006 6.51104 0.975006 5.20005C0.975006 2.97716 2.77711 1.17505 5.00001 1.17505C7.2229 1.17505 9.02501 2.97716 9.02501 5.20005C9.02501 6.51104 8.37999 7.49041 7.66171 8.19764C7.30278 8.55104 6.93061 8.83108 6.62165 9.04482C6.49452 9.13277 6.37995 9.20826 6.27946 9.27447C6.25737 9.28903 6.23596 9.30314 6.21524 9.31683C6.11223 9.38493 6.00042 9.45912 5.93001 9.52245L5.92986 9.52259C5.69296 9.73593 5.50048 10.0546 5.35757 10.3453C5.21078 10.6439 5.09707 10.9533 5.03043 11.1818L5.39041 11.2868ZM5.39041 11.2868C5.33121 11.4896 5.16521 11.5924 5.00001 11.5972L5.0304 11.1819L5.39041 11.2868ZM3.42501 5.20005C3.42501 6.06996 4.1301 6.77505 5.00001 6.77505C5.86991 6.77505 6.57501 6.06996 6.57501 5.20005C6.57501 4.33014 5.86991 3.62505 5.00001 3.62505C4.1301 3.62505 3.42501 4.33014 3.42501 5.20005Z"
                  stroke="#181818"
                  strokeWidth="0.75"
                />
              </svg>
            </button>
          </div>
          <button className="bg-gradient-to-b from-primary to-gray-900 rounded-md h-9 ">
            <svg
              className="w-6 h-6 m-2"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.2 0.199951C1.9956 0.199951 0.199997 1.99555 0.199997 4.19995C0.199997 6.40435 1.9956 8.19995 4.2 8.19995C5.1586 8.19995 6.03895 7.85955 6.7289 7.29448L9.11718 9.68276C9.15404 9.72115 9.19819 9.7518 9.24704 9.77292C9.29589 9.79403 9.34847 9.80519 9.40168 9.80573C9.4549 9.80627 9.50769 9.79619 9.55696 9.77607C9.60623 9.75596 9.65099 9.72621 9.68863 9.68858C9.72626 9.65095 9.756 9.60619 9.77612 9.55691C9.79623 9.50764 9.80632 9.45485 9.80577 9.40164C9.80523 9.34842 9.79408 9.29585 9.77296 9.247C9.75185 9.19814 9.7212 9.154 9.68281 9.11714L7.29453 6.72886C7.85959 6.03891 8.2 5.15855 8.2 4.19995C8.2 1.99555 6.4044 0.199951 4.2 0.199951ZM4.2 0.999951C5.97205 0.999951 7.4 2.4279 7.4 4.19995C7.4 5.972 5.97205 7.39995 4.2 7.39995C2.42795 7.39995 0.999997 5.972 0.999997 4.19995C0.999997 2.4279 2.42795 0.999951 4.2 0.999951Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <h1 className="text-gray-200  xs:text-2xl font-bold text-center mt-5">
        {" "}
        Search Doctor by Health Condition
      </h1>
      <MennuBar />
    </div>
  );
};
