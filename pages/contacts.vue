<template>
  <div class="text-5xl">

    <div class="dropdown">
      <button class="dropbtn">Меню</button>
      <div class="dropdown-content">
        <a href="#">Ссылка 1</a>
        <a href="#">Ссылка 2</a>
        <a href="#">Ссылка 3</a>
      </div>
    </div>

  </div>
</template>
<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropbtn:hover {
  background-color: #3e8e41;
}
</style>