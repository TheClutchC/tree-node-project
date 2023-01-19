import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../baseUrl";

const initialState = {
  currentUser: null
};

export const fetchLogin = createAsyncThunk(
  "login/fetchLogin",
  async () => {
    const response = await fetch(baseUrl + "login");
    if (!response.ok) {
      return Promise.reject("Unable to fetch login:" + response.status);
    }
    const data = await response.json();
    console.log("We're hitting the frontend!");
    return data;
  }
);