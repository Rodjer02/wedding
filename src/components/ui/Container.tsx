import { ReactNode } from "react";
import styles from "./Container.module.scss";

type Props = {
  children: ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
};

export function Container({ children, className, as: Tag = "div" }: Props) {
  const Component = Tag as React.ElementType;
  return (
    <Component className={`${styles.container} ${className ?? ""}`}>
      {children}
    </Component>
  );
}
