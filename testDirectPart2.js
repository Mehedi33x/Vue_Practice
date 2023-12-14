var part2 = Vue.createApp({
  data() {
    return {
      intro: "Welcome here",
      count: 0,
      search_input: "",
      //   allData:
      tableData: [
        {
          name: "Md. Abir Khan",
          email: "abir.khan@example.com",
          contact: "+8801712345678",
          age: 28,
        },
        {
          name: "Aisha Akhter",
          email: "aisha.akhtar@example.com",
          contact: "+8801898765432",
          age: 25,
        },
        {
          name: "Rahim Uddin",
          email: "rahim.uddin@example.com",
          contact: "+8801654321098",
          age: 33,
        },
        {
          name: "Jannat Ara",
          email: "jannat.ara@example.com",
          contact: "+8801912345609",
          age: 22,
        },
        {
          name: "Faisal Ahmed",
          email: "faisal.ahmed@example.com",
          contact: "+8801709876543",
          age: 30,
        },
        {
          name: "Sharmin Sultana",
          email: "sharmin.sultana@example.com",
          contact: "+8801812345670",
          age: 24,
        },
        {
          name: "Imran Hossain",
          email: "imran.hossain@example.com",
          contact: "+8801954321098",
          age: 27,
        },
        {
          name: "Nusrat Jahan",
          email: "nusrat.jahan@example.com",
          contact: "+8801787654321",
          age: 21,
        },
        {
          name: "Karim Chowdhury",
          email: "karim.chowdhury@example.com",
          contact: "+8801612345609",
          age: 35,
        },
        {
          name: "Tania Islam",
          email: "tania.islam@example.com",
          contact: "+88019098765432",
          age: 26,
        },
        {
          name: "Sohel Rana",
          email: "sohel.rana@example.com",
          contact: "+8801776543210",
          age: 29,
        },
        {
          name: "Mim Akhter",
          email: "mim.akhtar@example.com",
          contact: "+8801887654309",
          age: 23,
        },
        {
          name: "Salim Khan",
          email: "salim.khan@example.com",
          contact: "+8801665432109",
          age: 33,
        },
        {
          name: "Farhana Zaman",
          email: "farhana.zaman@example.com",
          contact: "+8801998765421",
          age: 19,
        },
        {
          name: "Monirul Islam",
          email: "monirul.islam@example.com",
          contact: "+8801754321098",
          age: 28,
        },
        {
          name: "Sabrina Ahmed",
          email: "sabrina.ahmed@example.com",
          contact: "+8801876543209",
          age: 20,
        },
        {
          name: "Zunayed Khan",
          email: "zunayed.khan@example.com",
          contact: "+8801643210987",
          age: 33,
        },
      ],
    };
  },

  methods: {
    searchData() {
      if (this.search_input != "") {
        return this.tableData.filter(
          (item) =>
            item.name == this.search_input ||
            item.age == this.search_input ||
            item.contact == this.search_input ||
            item.email == this.search_input
        );
      } else {
        return this.tableData;
      }
    },
    increase() {
      this.count++;
    },
    decrease() {
      this.count--;
    },
  },
});

part2.mount("#part2");
