import "./App.css";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./hooks/redux";
import { useEffect } from "react";
import { fetchUsers } from "./store/reducers/ActionCreator";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";

function App() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      {/*{isLoading && <h1>Loading</h1>}*/}
      {/*{error && <h1>{error}</h1>}*/}
      {/*{JSON.stringify(users, null, 2)}*/}

      <div style={{ display: "flex" }}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
