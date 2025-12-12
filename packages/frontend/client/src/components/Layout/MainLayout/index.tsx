import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss"
import { useSelector } from "react-redux";
import type { RootState } from "../../../context";

export default function MainLayout({ children }: { children: ReactNode }) {
    const { user } = useSelector((state: RootState) => state.main)

    return (
        <div className="main-layout">
            <Header />
            <main>
                {children}
            </main>
            {user ? <Footer /> : null}
        </div>
    )
}