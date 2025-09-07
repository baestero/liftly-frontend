export const API_URL = "http://localhost:3000";

export const TOKEN_POST = (body) => {
  return {
    url: `${API_URL}/user/auth`,
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: `${API_URL}/user/register`,
    options: {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: `${API_URL}/user/me`,
    options: {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    },
  };
};

export const TOKEN_VALIDATE_GET = (token) => {
  return {
    url: `${API_URL}/user/validate`,
    options: {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    },
  };
};
