/*

import React from 'react'
import { Link } from "react-router-dom";

export const Home = () => {
    
    return (
        <div>
            <h1><Link to="/success">Go To Success Page</Link></h1>
        </div>
    )
}

import React from "react";

export const Login = () => {
  const google = () => {
    window.open(`${process.env.REACT_APP_SERVER}/auth/google`, "_self");     
  };
  return (
    <div>
      <button onClick={google}>
        Login With Google
      </button>
    </div>
  );
};

export const Success = () => {

    const logout = () => {
        window.open(`${process.env.REACT_APP_SERVER}/users/logout`, "_self")
    }

    return <div>Login Successful!
      <button onClick={logout}>Log Out!</button>
  </div>;
};

const [user, setUser] = useState(null);

    const getUser = async () => {
        try {
          const { data } = await axios.get(
            `${process.env.REACT_APP_SERVER}/users/login/success`,
            {
              withCredentials: true,
            }
            );
            console.log(data.user);
            setUser(data.user);
        } catch (err) {
            console.log(err);
        }
      };

    useEffect(() => {

        getUser();   
        
      }, []);

      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
        <Route
          path="/success"
          element={user ? <Success /> : <Navigate to="/login" />}
        />
      </Routes>


*/