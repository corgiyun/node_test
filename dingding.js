const axios = require("axios");
const webhookUrl =
  "https://oapi.dingtalk.com/robot/send?access_token=7e1d6a87dd72676c589d70c559f42e5eb6e895d74e475ccf5d017aa0252a490d";
const sendData = {
  msgtype: "link",
  link: {
    text:
      "这个即将发布的新版本，创始人xx称它为红树林。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是红树林",
    title: "时代的火车向前开",
    picUrl: "",
    messageUrl:
      "https://www.dingtalk.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
  },
};
axios.post(webhookUrl, sendData);

// async function sendMsg() {
//   try {
//     await axios.post(webhookUrl, sendData);
//   } catch (err) {
//     console.log(err);
//   }
// }

// sendMsg();
