import React, { useEffect, useState } from "react";
import { LoadingContext } from "./LoadingContext";
import type { ILoadingContext } from "./LoadingContext";
interface Props {
  children: React.ReactNode;
}

export default function LoadingComponent({ children }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const contextValue: ILoadingContext = {
    isLoading,
    setIsLoading,
  };

  return (
    <LoadingContext.Provider value={contextValue}>
      {children}
    </LoadingContext.Provider>
  );
}
