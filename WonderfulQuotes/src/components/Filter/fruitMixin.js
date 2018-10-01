export const fruitMixin = {
  //like class not object
  //like superclass
  data() {
    return { fruits: ["apple", "banana", "melon"], filterText: "" };
  },
  computed: {
    filteredFruites() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  //using twice, create twice
  created() {
    console.log("Created");
  }
};
