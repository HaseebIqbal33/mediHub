import React from "react";
import { classNames } from "../../utility/utility";

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label: string;
  icon?: JSX.Element;
  spanClass?: string;
}

export const Button = ({ label, spanClass = "", ...rest }: IButton) => {
  return (
    <button
      className={classNames(
        rest.className
          ? rest.className
          : "bg-black-secondary text-sm text-white  py-3 px-10 rounded-md inline-flex items-center shadow-lg"
      )}
      {...rest}
    >
      <span className={spanClass}>{label}</span>
    </button>
  );
};

// import React, { lazy } from "react";
// import { classNames } from "../../utility/utility";
// interface IButton
//   extends React.DetailedHTMLProps<
//     React.ButtonHTMLAttributes<HTMLButtonElement>,
//     HTMLButtonElement
//   > {
//   label: string;
//   icon?: JSX.Element;
// }
// export const Button = ({ label, ...rest }: IButton) => {
//   return (
//     <button
//       className={classNames(
//         `py-3 px-10 w-96`,
//         rest.className ? rest.className : ""
//       )}
//       {...rest}
//     >
//       {label}
//     </button>
//   );
// };
