import Add from "../componen/AddMovie/addMovie";
import Footer from "../componen/Footer/footer";
import Hero from "../componen/Hero/Hero";
import Movies from "../componen/Movies/movies";
import Navbar from "../componen/Navbar/navbar";

function Main() {
  return (
    <div>
      <Hero />
      <Movies />
      <Add />
    </div>
  );
}
function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
