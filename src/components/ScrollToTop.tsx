// components/ScrollToTop.tsx
'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; // 💡 Import useRouter from next/router

// Define the component as a functional component (React.FC is optional but good practice in TS)
const ScrollToTop: React.FC = () => {
    // 💡 Initialize the useRouter hook
    const router = useRouter(); 

    // The router object has a 'pathname' property that updates on navigation,
    // which serves the same purpose as useLocation().pathname in React Router.
    const { pathname } = router; 

    // This effect runs every time the pathname changes (i.e., every client-side navigation)
    useEffect(() => {
        // Scrolls the window to the top-left corner
        window.scrollTo(0, 0);
    }, [pathname]); // Re-run effect whenever the route changes

    // This component doesn't render anything visually, it just manages side effects
    return null;
};

export default ScrollToTop;