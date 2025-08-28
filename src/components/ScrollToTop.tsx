import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant",
        });
    }, [location.pathname]);

    return null;
}
