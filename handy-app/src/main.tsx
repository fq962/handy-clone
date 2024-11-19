import { Provider } from "./components/ui/provider";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk publishable key to the .env.local file");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      signInForceRedirectUrl="/"
      afterSignOutUrl="/"
    >
      <Provider>
        <App />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
