"use client";
import React, { useState, createContext } from "react";
export enum TabState {
  LEARN = "Learn",
  BROWSE = "Browse",
  SEND = "Send",
}

// create a context to store the tab state
export const TabContext = createContext({
  tabState: TabState.BROWSE,
  setTabState: (tabState: TabState) => {},
});

// define the tab provider

export const TabProvider = ({ children }: { children: React.ReactNode }) => {
  const [tabState, setTabState] = useState(TabState.BROWSE);

  return (
    <TabContext.Provider value={{ tabState, setTabState }}>
      {children}
    </TabContext.Provider>
  );
};
