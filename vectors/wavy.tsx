import { SVGProps } from "react";

export function Wavy(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="100%"
      height="100%"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#F5F4F8"
        fillOpacity="1"
        d="M0,256L60,229.3C120,203,240,149,360,117.3C480,85,600,75,720,90.7C840,107,960,149,1080,165.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  );
}
