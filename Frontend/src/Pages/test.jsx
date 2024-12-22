import axios from "axios";

fetch("http://localhost:3000/pwm/api/user/signup", {
  method: "POST",
  body: JSON.stringify(user),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch error:", error));


