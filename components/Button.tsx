import { FC, PropsWithChildren } from "react";

export const Button: FC<PropsWithChildren> = ({ children }) => (
  <button className="cursor-pointer border px-2 py-1">{children}</button>
);
