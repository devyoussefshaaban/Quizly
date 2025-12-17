import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

import "./index.scss"

export default function MainLayout({ children }: { children: ReactNode }) {
    return (
        <div className="main-layout">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}