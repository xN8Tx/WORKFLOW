import axios from "axios";
import { useNavigate } from "react-router-dom";

const auth = async (user, password) => {
  return axios.get(`https://64060fc640597b65de493e01.mockapi.io/name?name=${user}`)
    .then((res) => res.data.filter(i => i.name === user))
    .then(user => {
      if (user[0].password === password) {
        localStorage.setItem("isAuth", true);
        localStorage.setItem("user", user[0].name);
        return true;
      } else {
        alert("Неправильный пароль");
        return false;
      }
    });
};

export { auth };