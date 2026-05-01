import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type Variant = "primary" | "ghost" | "outline";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className, children, ...rest } = props;
  const cls = `${styles.btn} ${styles[variant]} ${className ?? ""}`;

  if ("href" in props && props.href) {
    const linkRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={cls} {...linkRest}>
        {children}
      </a>
    );
  }

  const btnRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={cls} {...btnRest}>
      {children}
    </button>
  );
}
