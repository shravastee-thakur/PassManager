import { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";

const PasswordContext = createContext();

export const usePasswordContext = () => useContext(PasswordContext);

export const PasswordProvider = ({ children }) => {
  // state for adding new password
  const [newPassword, setNewPassword] = useState({
    title: "",
    password: "",
  });

  // function for adding new password
  const [allPassword, setAllPassword] = useState([]);

  // post password
  const PostPassword = async (data) => {
    console.log(data);

    try {
      const res = await axios.post(
        "http://localhost:3000/pwm/api/password/postpassword",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      let postData = res.data;

      if (postData?.success) {
        let mainData = postData?.data;
        setAllPassword([...allPassword, mainData]);
        setNewPassword({ title: "", password: "" });
      } else {
        console.log(postData?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // get password
  const GetPassword = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/pwm/api/password/getpassword",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        }
      );

      let getData = res?.data;
      console.log(getData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PasswordContext.Provider
      value={{
        PostPassword,
        GetPassword,
        newPassword,
        setNewPassword,
        allPassword,
      }}
    >
      {children}
    </PasswordContext.Provider>
  );
};
