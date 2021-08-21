<template>
<!-- :class={`nav ${handleShow && "nav_black"}` -->
  <div class="nav nav_black" >
      <img
        class="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/640px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img class="nav_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Logo"/>
    </div>
</template>

<script>
export default {
name:'Nav'
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  height: 30px;
  display: flex;
  z-index: 1;
  justify-content: space-between;
  transition-timing-function: ease-in;
  transition: all 0.5s;
}
.nav_logo {
  position: fixed;
  left: 20px;
  width: 80px;
  object-fit: contain;
}
.nav_avatar {
  position: fixed;
  right: 20px;
  width: 30px;
  object-fit: contain;
}
.nav_black {
  background-color: #111;
}

</style>