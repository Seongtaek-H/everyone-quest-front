import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
