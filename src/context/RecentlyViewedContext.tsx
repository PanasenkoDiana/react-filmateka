import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const RecentlyViewedContext = createContext([]);

interface IRecentlyViewedProvider{
    children: ReactNode;
}

export function RecentlyViewedProvider(props: IRecentlyViewedProvider) {
    const children = props.children
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    useEffect(() => {
        async function fetchRecentlyViewed() {
            try {
                const response = await fetch('http://localhost:8000/recently-viewed?userId=1');
                const data = await response.json();
                setRecentlyViewed(data);
            } catch (error) {
                console.error("Ошибка загрузки недавно просмотренных фильмов:", error);
            }
        }

        fetchRecentlyViewed();
    }, []);

    return (
        <RecentlyViewedContext.Provider value={recentlyViewed}>
            {children}
        </RecentlyViewedContext.Provider>
    );
}

export function useRecentlyViewed() {
    return useContext(RecentlyViewedContext);
}
