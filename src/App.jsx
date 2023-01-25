import Footer from "./components/Footer";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
        flex: 1,
      }}
    >
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <SideMenu />
        <div>Main Contan</div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
