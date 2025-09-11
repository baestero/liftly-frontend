export const API_URL = "http://localhost:3000";

export const TOKEN_POST = (body) => {
  return {
    url: `${API_URL}/users/auth`,
    options: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  };
};

export const USER_POST = (body) => {
  return {
    url: `${API_URL}/users`,
    options: {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(body),
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: `${API_URL}/users/me`,
    options: {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    },
  };
};

export const TOKEN_VALIDATE_GET = (token) => {
  return {
    url: `${API_URL}/users/validate`,
    options: {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    },
  };
};

export const CATEGORY_GET = (token) => {
  return {
    url: `${API_URL}/categories`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};

export const SUBCATEGORY_GET = (token, id) => {
  return {
    url: `${API_URL}/categories/${id}/subcategories`,
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  };
};
