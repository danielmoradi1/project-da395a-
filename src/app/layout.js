import { GlobalContextProvider } from "./context/globalContext";
import "./styles/globals.css";

export const metadata = {
  title: "DineDiscover",
  description:
    "DineDiscover aims simplifying the picking process of your next dining spot.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalContextProvider>
          <section className="section">
            <div className="container">{children}</div>
          </section>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
