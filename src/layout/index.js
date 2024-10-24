import Body from "./body";
import Footer from "./footer";
import Header from "./header";

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
