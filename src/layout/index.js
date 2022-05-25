import Container from "../componen/container";
import Footer from "../componen/Footer/footer";
import Navbar from "../componen/Navbar/navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      <Container>
        <main>{props.children}</main>
      </Container>
      <Footer />
    </>
  );
}

export default Layout;
