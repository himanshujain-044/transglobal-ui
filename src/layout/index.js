import Footer from "./footer";
import Header from "./header";
import Body from "./body";

const Layout = () => {
  return (
    <div className="w-full flex flex-col">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};
export default Layout;
