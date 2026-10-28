import { About, Contact, Hero, Navbar, Works } from "./components";

const App = () => (
  <div className="min-h-screen bg-primary text-white">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Works />
      <Contact />
    </main>
  </div>
);

export default App;
