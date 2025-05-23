import { memo } from "react";

export const ChevronDownIcon = memo(function ChevronDownIcon(
  props: Readonly<React.SVGProps<SVGSVGElement>>
) {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.15167 0.142944H8.31461C8.25769 0.142944 8.20412 0.170846 8.17064 0.216605L4.99988 4.58714L1.82912 0.216605C1.79564 0.170846 1.74207 0.142944 1.68515 0.142944H0.848094C0.775549 0.142944 0.733139 0.225534 0.775549 0.284686L4.71082 5.70991C4.85367 5.90634 5.14608 5.90634 5.28783 5.70991L9.22309 0.284686C9.26662 0.225534 9.22421 0.142944 9.15167 0.142944Z"
        fill="currentColor"
      />
    </svg>
  );
});
