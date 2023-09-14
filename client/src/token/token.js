import jwt_decode from "jwt-decode";

export default function validToken (token) {
  if (!token) return false;
  const decoded = jwt_decode(token);
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    localStorage.removeItem("access_token");
    return false;
  }
  return true;
};
