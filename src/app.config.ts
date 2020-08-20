export default {
  pages: ["pages/index/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },

  // 注释 plugins 后项目没有报错
  plugins: {
    "live-player-plugin": {
      version: "1.1.7",
      provider: "wx2b03c6e691cd7370",
    },
  },
};
