import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import RobotStateStructure from "./types";
import RobotStructure from "../types";

export const initialRobotsState: RobotStateStructure = {
  robots: [],
};

const robotsSlice = createSlice({
  name: "robots",
  initialState: initialRobotsState,
  reducers: {
    loadRobots: (
      currentState,
      action: PayloadAction<RobotStructure[]>,
    ): RobotStateStructure => ({
      ...currentState,
      robots: action.payload,
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotsSlice.actions;

export const robotReducer = robotsSlice.reducer;
