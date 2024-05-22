import { GlobalContextProvider } from "./context/globalContext";

export const metadata = {
  title: "Smultronställen",
  description: "TBD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
