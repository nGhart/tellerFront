import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import {
  Link,
  useNavigation,
  redirect,
  Form,
  useNavigate,
} from "react-router-dom";
import BASE_URL from "../utilities/apiUrl";
import axios from "axios";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({});
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();

  const handleLogin = () => {
    //console.log(loginData);

    axios
      .post(`${BASE_URL}/teller/login`, loginData)
      .then((resp) => {
        //console.log(resp);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
        return error;
      });
  };

  return (
    <div className="flex" style={{ height: "100vh", alignItems: "center" }}>
      <div className="landing">
        <Form className="p10" onSubmit={handleLogin}>
          <h1 className="title">Log in</h1>
          <FormControl>
            <FormLabel>Staff Id</FormLabel>
            <Input
              type="text"
              name="staffId"
              onChange={(e) =>
                setLoginData({ ...loginData, staffId: e.target.value })
              }
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              onChange={(e) =>
                setLoginData({ ...loginData, password: e.target.value })
              }
            />
          </FormControl>
          <button
            variant="primary"
            className="userButtons"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting ..." : "Submit"}
          </button>
        </Form>
        <div>
          <h5>Don't have an account? </h5>
          <button className="userButtons">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
