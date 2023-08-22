const lambadService =
  "https://ve7zn4tkvg.execute-api.ap-south-1.amazonaws.com/KeysGen";
import axios from "axios";
import getAuthorizationHeader from "../utils/getAuthorizationHeader";
import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";
export async function downloadKeys(data = {}) {
  // Default options are marked with *
  const response = await axios
    .post(lambadService, data)
    .then((response) => {
      downloadKeysInLocal(response.data.body.presigned_private_key_url);
      updateUserKeyGeneratedField(data.username);
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function updateUserKeyGeneratedField(user) {
  axios({
    method: "patch",
    url: `/v1/update/user/updateKeyGenerationFeild/${user}`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      keysGenerated: true,
    },
  })
    .then((response) => {
      const currentUser = Cookies.get("currentUser");
      if (response.data.keysGenerated && currentUser) {
        const user = JSON.parse(currentUser);
        user.user.keysGenerated = true;
        Cookies.set("currentUser", JSON.stringify(user));
      }
      location.reload();
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

function downloadKeysInLocal(url) {
  // Create a button element
  const myButton = document.createElement("button");

  // Attach a click event listener to the button
  myButton.addEventListener("click", function () {
    // Open a new window
    const myWindow = window.open(url, "_blank");
  });

  // Programmatically click the button
  myButton.click();
}
