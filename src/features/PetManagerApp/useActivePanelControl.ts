import { useState } from "react";

const useActivePanelControl = (initialValue: string, tabsNames: string[]) => {
  const [controlPanel, setControlPanel] = useState(initialValue);

  const handleControlPanel = (mode: string) => {
    setControlPanel(mode);
  };

  return {
    handleControlPanel,
    controlPanel,
    tabsNames,
  };
};

export default useActivePanelControl;
