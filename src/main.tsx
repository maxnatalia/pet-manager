import React from "react";
import ReactDOM from "react-dom/client";
import App from "./core/App.tsx";
import { ThemeSwitcherProvider } from "./common/ThemeSwitcher/themeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>
);
