import { Navbar } from "./components/Navbar";

const App = () => (
  <div className="bg-primary bg-opacity-0 w-full overflow-hidden">
    <div className={`sm:px-16 px-6 flex justify-center items-center`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <Navbar />
      </div>
    </div>
  </div>
);

export default App;