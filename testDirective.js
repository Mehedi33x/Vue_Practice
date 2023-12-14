var part1 = Vue.createApp({
  data() {
    return {
      text: "My Info",
      myinto: "Good Morning",
      info: {
        // html file need '' this
        colorname: '<h1 style="color: green">Assalamualaikum</h1>',
        name: "mehedi",
        image: "https://picsum.photos/200/300",
        email: "m123@gmail.com",
        contact: "0198656646",
        github: "https://github.com/Mehedi33x",
      },
    };
  },
});
part1.mount("#part1");
