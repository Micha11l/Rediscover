import type { ComponentPropsWithoutRef, ElementType } from "react";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

const baseClassName =
  "mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8 2xl:px-12";

export function Container<T extends ElementType = "div">({
  as,
  className = "",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  const classes = [baseClassName, className].filter(Boolean).join(" ");

  return <Component className={classes} {...props} />;
}
