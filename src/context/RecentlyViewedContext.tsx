import React, { createContext, useContext, useState, useEffect } from 'react';
import { IMovie } from '../shared/types/types'

interface RecentlyViewedContextType {
  recentlyViewed: IMovie[];
  
  addToRecentlyViewed: (movie: IMovie) => void;
}

const RecentlyViewedContext = createContext<RecentlyViewedContextType | undefined>(undefined);

export function RecentlyViewedProvider({ children }: { children: React.ReactNode }) {
  const [recentlyViewed, setRecentlyViewed] = useState<IMovie[]>(() => {
    const saved = localStorage.getItem('recentlyViewed');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = (movie: IMovie) => {
    setRecentlyViewed(prev => {
      const filtered = prev.filter(m => m.id !== movie.id);
      return [movie, ...filtered].slice(0, 5); // Храним только последние 5 фильмов
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  const context = useContext(RecentlyViewedContext);
  if (context === undefined) {
    throw new Error('useRecentlyViewed must be used within a RecentlyViewedProvider');
  }
  return context;
}
