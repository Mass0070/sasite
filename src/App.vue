<template>
  <div id="app">
    <div id="Navbar">
      <navbar />
    </div>
    <div id="Router">
      <router-view />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}
body {
  font-family: "montserrat", sans-serif;
  background: url("/SA.jpeg");
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  text-align: left;
  background-color: #fff;
  line-height: normal;
}
</style>

<script defer>
import navbar from "./components/navbar";
export default {
  name: "app",
  components: {
    navbar,
  },
  sockets: {
    tidUdløb: function() {
      this.alert("Din tid er udløbet", "error")
    },
    Accept: function() {
      this.alert("Din ansøgning er accepteret", "success")
    },
    Deny: function() {
      this.alert("Din ansøgning er afvist", "error")
    },
    link(mc) {
      this.alert("Du er blevet linket med " + mc, "success")
    },
    unlink(mc) {
      this.alert("Du er blevet unlinket med " + mc, "success")
    }
  }, 
  methods: {
    alert: function(message, icon) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 15000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', this.$swal.stopTimer)
          toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: icon,
        title: message
      })
    } 
  }
};
</script>
