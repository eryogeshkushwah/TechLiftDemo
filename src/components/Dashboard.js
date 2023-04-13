import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("login");

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  });

  return (
    <>
      <div>DashBoard</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error, nisi
        amet quidem molestiae distinctio temporibus? Officiis eos sunt officia
        corrupti, obcaecati delectus repellat consequuntur asperiores eum,
        consectetur in repudiandae!
      </p>
    </>
  );
};

export default Dashboard;
