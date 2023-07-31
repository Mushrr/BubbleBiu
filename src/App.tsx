import Nav from "@layouts/Nav";
import Aside from "@layouts/Aside";
import SubAside from "@layouts/SubAside";
import CanvasWrapper from "@layouts/CanvasWrapper";
import Footer from "@layouts/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col h-100vh">
        <div className="flex flex-row">
          <Aside></Aside>
          <SubAside></SubAside>
          <div className="flex flex-col w-full h-full items-stretch">
            <Nav></Nav>
            <CanvasWrapper></CanvasWrapper>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
