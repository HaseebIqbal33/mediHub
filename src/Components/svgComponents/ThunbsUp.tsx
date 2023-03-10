import React from "react";
interface IThumbsUp {
  fill?: string;
  width?: string;
  height?: string;
}
export const ThumbsUp = ({
  fill = "#52C42A",
  width = "27",
  height = "27",
}: IThumbsUp) => {
  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 27 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.125 23.625H5.625V10.125H1.125V23.625ZM25.875 11.25C25.875 10.0125 24.8625 9 23.625 9H16.5262L17.595 3.85875L17.6287 3.49875C17.6287 3.0375 17.4375 2.61 17.1337 2.30625L15.9412 1.125L8.53875 8.53875C8.1225 8.94375 7.875 9.50625 7.875 10.125V21.375C7.875 22.6125 8.8875 23.625 10.125 23.625H20.25C21.1838 23.625 21.9825 23.0625 22.32 22.2525L25.7175 14.3212C25.8188 14.0625 25.875 13.7925 25.875 13.5V11.3512L25.8638 11.34L25.875 11.25Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};
