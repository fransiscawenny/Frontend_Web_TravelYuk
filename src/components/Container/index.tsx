import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
export default function Container({ children }: Props) {
    return <div className="max-w-screen-xl mx-auto">{children}</div>;
}
