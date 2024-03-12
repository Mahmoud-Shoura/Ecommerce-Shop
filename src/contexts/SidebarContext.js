import React, { useState, createContext } from "react";
// create context
export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {
  return <SidebarContext.Provider>SidebarProvider</SidebarContext.Provider>;
};

export default SidebarProvider;
