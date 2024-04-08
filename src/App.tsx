import {
  TopNavBar,
  RoomList,
  Highlight,
  RoomPost,
  Footer,
  PantipRealtime,
  PantipHitz,
  ButtomNavbar,
  MobileMenu,
} from "./components";

const App = () => {
  return (
    <main className="screen-fit bg-background-body ">
      <MobileMenu />
      <ButtomNavbar />
      <TopNavBar />
      <Highlight />
      <RoomList />
      <RoomPost />
      <PantipRealtime />
      <PantipHitz />
      <Footer />
    </main>
  );
};

export default App;
