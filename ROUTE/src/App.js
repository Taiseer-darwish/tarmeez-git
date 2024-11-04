import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import Hello from "./components/hello";
import PostList from "./components/PostList";
import PostDetales from "./components/PostDetales";
import { PostContext } from "./Contexts/PostsContext";
import NotFond from "./NotFound";

function App() {
  let Posts = [
    {
      id: 1,
      title: "hello world",
      body: "fhgj dhdu sf rftgsfty fgf",
    },
    {
      id: 2,
      title: "second post",
      body: "fhgj dhdu sf rftgsfty fgf",
    },
    {
      id: 3,
      title: "thitd post",
      body: "fhgj dhdu sf rftgsfty fgf",
    },
  ];
  return (
    <PostContext.Provider value={Posts}>
      <div className="APP">
        <div>
          <Link to="/post">
            <button>post</button>
          </Link>
          <Link to="/hello">
            <button>Hello</button>
          </Link>
          <Link to="/home">
            <button>Home</button>
          </Link>
        </div>
        <Routes>
          <Route path="/" element={<h1>Root Route</h1>} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/post">
            <Route index element={<PostList />} />
            <Route path=":PostId" element={<PostDetales />} />
          </Route>
          <Route path="/home" element={<Home />} />

          <Route path="*" element={<NotFond />} />
        </Routes>
      </div>
    </PostContext.Provider>
  );
}

export default App;
