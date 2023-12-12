import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./i18n";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode i18nIsDynamicList>
    {/* <Provider store={undefined}> */}
    <ConfigProvider>
      <StyleProvider hashPriority="high">
        <App />
      </StyleProvider>
    </ConfigProvider>
    {/* </Provider> */}
  </React.StrictMode>
);
