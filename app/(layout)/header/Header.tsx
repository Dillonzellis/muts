import MainBar from "./MainBar";
import TopBar from "./TopBar";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <header>
      <TopBar />
      <MainBar />
      <Nav />
    </header>
  );
};

export default Header;
