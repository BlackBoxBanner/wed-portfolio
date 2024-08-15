import {cn} from "@/lib/utils";
import {ComponentProps} from "react";

export const Heading1 = ({className, ...props}: ComponentProps<"h1">) => {
  return (
    <h1
      className={cn("text-[7vw] lg:text-[8vw] leading-tight", className)}
      {...props}
    />
  );
};

export const Heading2 = ({className, ...props}: ComponentProps<"h1">) => {
  return <h2 className={cn("text-4xl lg:text-6xl", className)} {...props} />;
};

export const Paragraph = ({className, ...props}: ComponentProps<"p">) => {
  return <p className={cn("text-2xl", className)} {...props} />;
};
