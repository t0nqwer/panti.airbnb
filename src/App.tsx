import {
  TopNavBar,
  RoomList,
  Highlight,
  RoomPost,
  Footer,
  PantipRealtime,
} from "./components";

const App = () => {
  return (
    <main className="screen-fit bg-background-body ">
      <TopNavBar />
      <Highlight />
      <RoomList />
      <RoomPost />
      <PantipRealtime />
      <Footer />
    </main>
  );
};

export default App;
