import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/head";
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Maincontainer from "./components/Maincontainer";
import Watchpage from "./components/Watchpage";
import Demo from "./components/Demo";



const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <Watchpage />,
      },
      {
        path: "demo",
        element: (
        
            <Demo/>
              
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
       <RouterProvider router={approuter}/>
      </div>
    </Provider>
  );
}

export default App;
