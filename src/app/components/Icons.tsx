import { SVGProps } from "react";

export function Sun(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11 5V1h2v4h-2Zm6.65 2.75l-1.375-1.375l2.8-2.875l1.4 1.425L17.65 7.75ZM19 13v-2h4v2h-4Zm-8 10v-4h2v4h-2ZM6.35 7.7L3.5 4.925l1.425-1.4L7.75 6.35L6.35 7.7Zm12.7 12.8l-2.775-2.875l1.35-1.35l2.85 2.75L19.05 20.5ZM1 13v-2h4v2H1Zm3.925 7.5l-1.4-1.425l2.8-2.8l.725.675l.725.7l-2.85 2.85ZM12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Z"
      ></path>
    </svg>
  );
}

export function Moon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M235.54 150.21a104.84 104.84 0 0 1-37 52.91A104 104 0 0 1 32 120a103.09 103.09 0 0 1 20.88-62.52a104.84 104.84 0 0 1 52.91-37a8 8 0 0 1 10 10a88.08 88.08 0 0 0 109.8 109.8a8 8 0 0 1 10 10Z"
      ></path>
    </svg>
  );
}

export function Computer(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M2 21q-.425 0-.713-.288T1 20q0-.425.288-.713T2 19h20q.425 0 .713.288T23 20q0 .425-.288.713T22 21H2Zm2-3q-.825 0-1.413-.588T2 16V5q0-.825.588-1.413T4 3h16q.825 0 1.413.588T22 5v11q0 .825-.588 1.413T20 18H4Zm0-2h16V5H4v11Zm0 0V5v11Z"
      ></path>
    </svg>
  );
}

export function LinuxLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M229 222.25a8 8 0 0 1-11.24-1.25C216.39 219.27 184 177.86 184 96a56 56 0 0 0-112 0c0 81.86-32.37 123.27-33.75 125a8 8 0 0 1-12.51-10c.15-.2 7.69-9.9 15.13-28.74C47.77 164.8 56 135.64 56 96a72 72 0 0 1 144 0c0 39.64 8.23 68.8 15.13 86.28c7.48 18.94 15.06 28.64 15.14 28.74a8 8 0 0 1-1.27 11.23ZM100 96a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm68 12a12 12 0 1 0-12 12a12 12 0 0 0 12-12Zm-68.42 28.84a8 8 0 0 0-7.15 14.31l32 16a7.94 7.94 0 0 0 7.15 0l32-16a8 8 0 0 0-7.16-14.31L128 151.05ZM128 184a54.07 54.07 0 0 0-47 28.11a8 8 0 1 0 14 7.78a37.35 37.35 0 0 1 66 0a8 8 0 0 0 14-7.78A54.07 54.07 0 0 0 128 184Z"
      ></path>
    </svg>
  );
}

export function Mail(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.313t.1-.412q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037Z"
      ></path>
    </svg>
  );
}


export function Lock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M6 22q-.825 0-1.413-.588T4 20V10q0-.825.588-1.413T6 8h1V6q0-2.075 1.463-3.538T12 1q2.075 0 3.538 1.463T17 6v2h1q.825 0 1.413.588T20 10v10q0 .825-.588 1.413T18 22H6Zm6-5q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17ZM9 8h6V6q0-1.25-.875-2.125T12 3q-1.25 0-2.125.875T9 6v2Z"></path></svg>
  )
}