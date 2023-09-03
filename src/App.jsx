import { Suspense, useState } from "react";
import { UserData } from "../Context";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Lander } from "./Utils/Lander";
import { RootLayout } from "./Utils/RootLayout";
import { User } from "./Components/Auth/User";
import { Auth } from "./Components/Auth/Auth";
import { StartTest } from "./Components/Auth/StartTest";
import { Result } from "./Components/Auth/Result";
export const App = () => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<Lander />} />
        <Route path="/auth" element={<Auth />}>
          <Route path=":userId" element={<Auth />} />
        </Route>
        <Route path="user" element={<User />} />
        <Route path="start-test" element={<StartTest />}>
          <Route path=":userId/:test" element={<StartTest />} />
        </Route>
        <Route path="result/:userId/:test" element={<Result />} />
        <Route path="*" element={<Lander />} />
      </Route>
    )
  );
  return (
    <UserData.Provider value={{ user, setUser }}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </UserData.Provider>
  );
};
