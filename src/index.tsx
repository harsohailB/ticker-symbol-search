import React from "react";
import ReactDOM from "react-dom";
import { TickerSymbolSearch } from "./container/TickerSymbolSearch";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <img src="https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80" />
    <TickerSymbolSearch />
  </React.StrictMode>,
  document.getElementById("root")
);
