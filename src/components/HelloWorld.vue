<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Hello World!</h1>
    <h2>{{data}}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      data: 11
    };
  },
  props: {
    msg: String
  },
  async mounted() {
    const res = await fetch("http://localhost:8000/");
    const data = await res.text();
    this.data = data;
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
