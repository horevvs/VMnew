<template>
    <div class="dropdown">
        <button class="text-2xl head">Услуги</button>
        <div class="dropdown-content w-72  ">
            <div class="submenu">
                <a href="#">Подменю 1-2</a>
                <!-- Вложенное подменю -->
                <div class="sub-dropdown">
                    <a href="#">Подподменю 1</a>
                    <a href="#">Подподменю 2</a>
                </div>
            </div>
            <div class="submenu">
                <a href="#">Подменю 1-2</a>
                <!-- Вложенное подменю -->
                <div class="sub-dropdown">
                    <a href="#">Подподменю 3</a>
                    <a href="#">Подподменю 4</a>
                </div>
            </div>
            <div class="submenu">
                <a href="#">Подменю 1-2</a>
                <!-- Вложенное подменю -->
                <div class="sub-dropdown">
                    <a href="#">Подподменю 5</a>
                    <a href="#">Подподменю 6</a>
                </div>
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
  
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

/* Показываем меню при наведении */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Стиль для ссылок */
.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Цвет при наведении */
.dropdown-content a:hover {
    background-color: #ddd;
}

/* Вложенное подменю */
.submenu {
    position: relative;
    /* Для позиционирования вложенного меню */
}

/* Внутреннее подменю скрыто по умолчанию */
.sub-dropdown {
    display: none;
    position: absolute;
    left: 100%;
    /* Расположить справа от родительского элемента */
    top: 0;
    background-color: #f1f1f1;
    min-width: 160px;
}

.submenu:hover .sub-dropdown {
    display: block;
    /* Показывать при наведении на родительский пункт */
}

/* Стиль для ссылок внутри вложенного меню */
.sub-dropdown a {
    padding: 12px 16px;
}
</style>