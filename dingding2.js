const ChatBot = require("dingtalk-robot-sender");
const schedule = require("node-schedule");
// 直接使用 webhook
const robot = new ChatBot({
  webhook:
    "https://oapi.dingtalk.com/robot/send?access_token=7e1d6a87dd72676c589d70c559f42e5eb6e895d74e475ccf5d017aa0252a490d",
});
// 定义规则
let rule = new schedule.RecurrenceRule();
rule.hour = 17;
rule.minute = 59;
rule.second = 0;

let textContent = {
  msgtype: "text",
  text: {
    content: "现在是下午5点59分，一会下班记得打卡哦",
  },
  at: {
    atMobiles: [],
    isAtAll: true,
  },
};

// 启动任务
schedule.scheduleJob(rule, () => {
  robot.send(textContent);
});

// job.cancel();

// let link = {
//   text:
//     "这个即将发布的新版本，创始人陈航（花名“无招”）称它为“红树林”。而在此之前，每当面临重大升级，产品经理们都会取一个应景的代号，这一次，为什么是“红树林”？",
//   title: "时代的火车向前开",
//   picUrl: "",
//   messageUrl:
//     "https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
// };
// robot.link(link);

// let title = "杭州天气";
// let text =
//   "#### 杭州天气 @156xxxx8827\n" +
//   "> 9度，西北风1级，空气良89，相对温度73%\n\n" +
//   "> ![screenshot](http://image.jpg)\n" +
//   "> ###### 10点20分发布 [天气](http://www.thinkpage.cn/) \n";
// let at2 = {
//   atMobiles: ["所有人"],
//   isAtAll: false,
// };
// robot.markdown(title, text, at2);

// let links = [
//   {
//     title: "时代的火车向前开",
//     messageURL:
//       "https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
//     picURL: "https://www.dingtalk.com/",
//   },
//   {
//     title: "时代的火车向前开2",
//     messageURL:
//       "https://mp.weixin.qq.com/s?__biz=MzA4NjMwMTA2Ng==&mid=2650316842&idx=1&sn=60da3ea2b29f1dcc43a7c8e4a7c97a16&scene=2&srcid=09189AnRJEdIiWVaKltFzNTw&from=timeline&isappinstalled=0&key=&ascene=2&uin=&devicetype=android-23&version=26031933&nettype=WIFI",
//     picURL: "https://www.dingtalk.com/",
//   },
// ];
// robot.feedCard(links);
