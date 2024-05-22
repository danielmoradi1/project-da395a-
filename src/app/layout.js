import { GlobalContextProvider } from "./context/globalContext";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
