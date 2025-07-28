import Footer from "./components/Footer";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import "./index.css";
import CompanyPage from "./pages/CompanyPage";

function App() {
  return (
    <div className="flex flex-row">
      <MainMenu />

      <div className="flex flex-col flex-1 w-full">
        <Header />

        <div>
          <CompanyPage />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
