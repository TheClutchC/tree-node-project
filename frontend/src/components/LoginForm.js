import React from "react";

const LoginForm = () => {

  console.log("Hello");

  return (
    <form>
      <label>
        Username:
        <input type="text" name="Username" />
      </label><br />
      <label>
        Password:
        <input type="text" name="Password" />
      </label><br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LoginForm;