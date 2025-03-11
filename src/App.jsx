import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import GithubPage from "./components/GithubPage.jsx";
import Home from "./components/Home.jsx";
import MouseFollower from "./components/MouseFollower.jsx";
const App = () => {
  return (
    <>
    <MouseFollower/>
      <Home />
      <GithubPage/>
      <About/>
      <Contact/>
    </>
  );
};

export default App;
