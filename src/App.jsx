import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import GroupsPage from "./pages/GroupsPage";
import LeftSide from "./components/LeftSide";

function App() {
  return (
    <>
      <BrowserRouter>
        <LeftSide />
        <Routes>
          <Route exact path="/" element={<ChatPage />} />
          <Route exact path="/groups" element={<GroupsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
