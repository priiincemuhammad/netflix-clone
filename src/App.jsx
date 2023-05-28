import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import GroupsPage from "./pages/GroupsPage";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { useSelector } from "react-redux";
import { AppContext, socket } from "./context/appContext";

function App() {
  const user = useSelector((state) => state.user);
  const [rooms, setRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState([]);
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMemberMsg, setPrivateMemberMsg] = useState({});
  const [newMessages, setNewMessages] = useState({});
  const [privateChat, setPrivateChat] = useState(false);
  const [groupChat, setGroupChat] = useState(false);

  return (
    <AppContext.Provider
      value={{
        socket,
        rooms,
        setRooms,
        currentRoom,
        setCurrentRoom,
        members,
        setMembers,
        messages,
        setMessages,
        privateMemberMsg,
        setPrivateMemberMsg,
        newMessages,
        setNewMessages,
        privateChat,
        setPrivateChat,
        groupChat,
        setGroupChat,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={user ? <ChatPage /> : <Signup />} />
          <Route
            exact
            path="/groups"
            element={user ? <GroupsPage /> : <Signup />}
          />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
