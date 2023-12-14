var part3 = Vue.createApp({
  data() {
    return {
      event: "MouseClick",
    };
  },
  methods: {
    test(ev) {
      console.log("TEst");
      console.log(ev);
    },
    alarm() {
      alert("Do not click!!!");
    },
  },
});

part3.mount("#part3");
