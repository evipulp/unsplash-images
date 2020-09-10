import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",

  headers: {
    Authorization: "Client-ID ykG02BmeUxKxEsaFrO7bn1EnpB3LWWp3H97ZMS5I8A8",
  },
});
