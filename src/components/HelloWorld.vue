<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Hello World!</h1>
    <h2 v-if="!data">{{data}}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
      data: null
    };
  },
  props: {
    msg: String
  },
  async mounted() {
    // try {
    // const res = await fetch("http://localhost:8000/");
    // const data = await res.text();
    // this.data = data;

    axios
      .get("http://localhost:8000/")
      .then(res => console.log(res))
      .catch(e => console.log(e.response));
    // } catch (error) {
    //   console.log(error);
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
