import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App font-kumbh-sans w-full min-h-screen relative overflow-hidden">
        <Header />
        <main>
          <MyRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
