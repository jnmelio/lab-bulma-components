import React from "react";
import "bulma/css/bulma.css";
import NavBar from "../navbar/Navbar";
import FormField from "../formfield/FormField";
import CoolButton from "../button/CoolButton";

function Signup() {
  return (
    <div>
      <NavBar />
      <FormField label={"Name"} type={"text"} placeholder={"e.g Alex Smith"} />
      <FormField
        label={"Email"}
        type={"email"}
        placeholder={"e.g. alexsmith@gmail.com"}
      />
      <FormField
        label={"Password"}
        type={"password"}
        placeholder={"password"}
      />
      <CoolButton isSmall isSuccess name={"Submit"} />
    </div>
  );
}

export default Signup;
