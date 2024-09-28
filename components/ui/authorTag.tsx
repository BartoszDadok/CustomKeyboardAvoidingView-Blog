import { badgeVariants } from "./badge";

interface TagProps {
  current?: boolean;
}
export function AuthorTag({ current }: TagProps) {
  return (
    <p
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md my-0",
      })}
    >
      Author: Bartosz Dadok
    </p>
  );
}
