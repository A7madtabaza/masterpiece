// import React from "react";
// import LoginForm from "../../components/LoginForm";

// const Login = () => {
//   return (
//     <div>
//       <LoginForm />
//     </div>
//   );
// };

// export default Login;
import React from "react";
import LoginForm from "../../components/LoginForm";

const Login = ({ handleLogin }) => {
  return (
    <div>
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
};

export default Login;