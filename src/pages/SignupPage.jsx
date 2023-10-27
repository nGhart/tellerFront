import React from "react";
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

const SignupPage = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="flex" style={{ height: "100vh", alignItems: "center" }}>
      <div className="landing">
        <Form method="post" className="signUp">
          <h1 className="title">Register</h1>

          <FormControl className="mb-3 ">
            <FormLabel htmlFor="name">Username</FormLabel>
            <Input type="text" id="name" name="name" required />
            <br />
          </FormControl>
          <FormControl className="mb-3">
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input type="email" id="email" name="email" required />
          </FormControl>
          <FormControl className="mb-3">
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" id="password" name="password" required />
          </FormControl>
          <FormControl className="mb-3">
            <FormLabel htmlFor="branch">Branch</FormLabel>
            <Input type="text" id="branch" name="branch" required />
          </FormControl>
          <button type="submit" className="userButtons" disabled={isSubmitting}>
            {isSubmitting ? "Submitting ..." : "Submit"}
          </button>
        </Form>
        <div>
          <h5>Already registered? </h5>
          <button className="userButtons">
            <Link to="/login">Log in</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
