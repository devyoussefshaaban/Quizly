import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children }: { children: ReactNode }) {
    const token = localStorage.getItem("token");

    if (token) return <Navigate to="/quiz" replace />;

    return children;
}
