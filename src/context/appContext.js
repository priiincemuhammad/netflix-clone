import { io } from "socket.io-client";
import React from "react";

const SERVER_PORT = "http://localhost:5000";
export const socket = io(SERVER_PORT);
// app context
export const AppContext = React.createContext();
