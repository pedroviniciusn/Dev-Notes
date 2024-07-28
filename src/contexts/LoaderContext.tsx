import React, {ReactNode, createContext, useCallback, useState} from 'react';
import {Loader} from '../components/Loader';

type LoaderContext = {
  showLoader: (message: string) => void;
  hideLoader: () => void;
};

type LoaderContextProvider = {
  children: ReactNode;
};

export const LoaderContext = createContext<LoaderContext | undefined>(
  undefined,
);

export const LoaderProvider: React.FC<LoaderContextProvider> = ({children}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loaderMessage, setLoaderMessage] = useState<string>('sdasdasr');

  const showLoader = useCallback((message: string) => {
    setLoaderMessage(message);
    setIsVisible(true);
  }, []);

  const hideLoader = useCallback(() => setIsVisible(false), []);

  const contextValue: LoaderContext = {
    showLoader,
    hideLoader,
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {isVisible && <Loader message={loaderMessage} />}
      {children}
    </LoaderContext.Provider>
  );
};
