import { memo } from "react";

export const EnergyIcon = memo(function EnergyIcon(
  props: Readonly<React.SVGProps<SVGSVGElement>>
) {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.9999 5.27216H9.06594L12.6034 0.802516C12.6767 0.707874 12.6106 0.570374 12.4909 0.570374H5.64273C5.59273 0.570374 5.54451 0.597159 5.51951 0.641802L0.892729 8.63287C0.837371 8.72752 0.905228 8.84716 1.01594 8.84716H4.13023L2.5338 15.2329C2.49987 15.3722 2.66773 15.4704 2.7713 15.3704L13.0981 5.5168C13.1909 5.4293 13.1284 5.27216 12.9999 5.27216ZM4.61059 11.9364L5.68737 7.63287H2.87666L6.26237 1.78645H10.2731L6.55344 6.48823H10.3213L4.61059 11.9364Z"
        fill="currentColor"
      />
    </svg>
  );
});
