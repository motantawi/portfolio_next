import NavBar from "../components/Navbar";
import "../styles/globals.css";
import Provider from "../utils/ThemeProvider";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
        <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
