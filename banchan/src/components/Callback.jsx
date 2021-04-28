import React, { useEffect } from "react";
import axios from "axios";
import qs from "qs";

const Callback = ({ history, location }) => {
  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, { ignoreQueryPrefix: true });
      try {
        const { data } = await axios.post("http://localhost:3001/auth", { code });
        localStorage.setItem("jwt_token", data.jwt_token);
        history.push("/");
      } catch (error) {
        console.log(error);
        history.push("/error"); // api 요청 실패 시 에러 핸들링 페이지
      }
    };
    getToken();
  }, [location, history]);
  return null;
};

export default Callback;
