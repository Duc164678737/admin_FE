import React, { useState, createContext, useContext } from "react";
import { AppDialogProps } from "components/common";

/* ------------- Types ------------- */
export const DIALOG_TYPES = {
  confirmDialog: "CONFIRM_DIALOG",
  warningDialog: "WARNING_DIALOG",
  deleteDialog: "DELETE_DIALOG",
};

/* ------------- Mapping Type With Component ------------- */

/* ------------- Initial State ------------- */
const INITIAL_STATE = {
  showGlobalDialog: () => {
    return;
  },
  closeGlobalDialog: () => {
    return;
  },
  store: {}, // Structure: {dialogType, dialogProps}
} as GlobalDialogContextProps;

const GlobalDialogContext = createContext(INITIAL_STATE);
export const useGlobalDialogContext = () => useContext(GlobalDialogContext);

export const GlobalDialogProvider: React.FC<ProviderProps> = ({ children }) => {
  const [store, setStore] = useState<StoreProps>({});

  const showGlobalDialog: ShowGlobalDialogProps = (newDialogType, newDialogProps) => {
    setStore({
      ...store,
      dialogType: newDialogType,
      dialogProps: { open: true, ...newDialogProps },
    });
  };

  const closeGlobalDialog = () => {
    setStore({
      ...store,
      dialogType: undefined,
      dialogProps: { open: false },
    });
  };

  return (
    <GlobalDialogContext.Provider value={{ store, showGlobalDialog, closeGlobalDialog }}>
      {children}
    </GlobalDialogContext.Provider>
  );
};

interface ProviderProps {
  children: React.ReactNode;
}

type DialogType = typeof DIALOG_TYPES[keyof typeof DIALOG_TYPES];

type ShowGlobalDialogProps = (newDialogType: DialogType, newDialogProps?: DialogProps) => void;

type StoreProps = {
  dialogType?: DialogType;
  dialogProps?: DialogProps;
};

type DialogProps = Omit<AppDialogProps, "open"> & { open?: boolean };

type GlobalDialogContextProps = {
  showGlobalDialog: ShowGlobalDialogProps;
  closeGlobalDialog: () => void;
  store: StoreProps;
};
