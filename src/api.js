export const API_URL = "http://localhost:3000";

export const TOKEN_POST = (body) => {
  return {
    url: API_URL + "/user/auth",
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  };
};
