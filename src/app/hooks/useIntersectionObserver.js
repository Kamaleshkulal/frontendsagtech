import { useEffect, useState } from 'react';

const useIntersectionObserver = (options) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect(); // Stop observing after the first visibility
            }
        }, options);

        const element = document.querySelector('.observe');
        if (element) {
            observer.observe(element);
        }

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return isVisible;
};

export default useIntersectionObserver;
