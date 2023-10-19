// import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";


function App() {
  // const dispatch = useDispatch();

  return (
    <div>
      <Outlet />
    </div>
  );
}
export default App;
