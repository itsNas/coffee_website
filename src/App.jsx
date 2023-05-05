import {
  Navbar,
  Home,
  Specialty,
  Products,
  Premium,
  Blog,
  Footer,
} from "./components";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      {/* <Specialty /> */}
      <Products />
      <Premium />
      <Blog />
      <Footer />
    </main>
  );
}

export default App;
