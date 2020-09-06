import axios from "axios";
import { showAlert } from "./alert";

const homeRedirect = (time) => {
  window.setTimeout(() => {
    location.assign("/");
  }, time);
};

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in Successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const signup = async (name, email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name,
        email,
        password,
      },
    });
    // Redirect to the homepage after 1.5 seconds
    if (res.data.status === "success") {
      showAlert("success", "Signed up successfully! Redirecting...");
      homeRedirect(1500);
    }
  } catch (err) {
    // Get the error | (err.response.data) comes from axios
    showAlert("error", err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });

    if (res.data.status === "success") {
      location.assign("/");
    }
  } catch (err) {
    showAlert("error", "Error logging out! Try again.");
  }
};
