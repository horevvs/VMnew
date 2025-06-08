<template>
    <footer>
        <div class="text-blue-400 mt-12 md:mt-24  justify-around container mx-auto flex flex-wrap">
            <div class="px-3 text-center md:text-start w-80 md:w-72">
                <h4 class="result text-lg mb-3 font-semibold">Разработка</h4>
                <p>
                    <NuxtLink to="/services/frontend#landing" class="hover:underline"> Сайты</NuxtLink>
                </p>
                <p>
                    <NuxtLink to="/services/frontend#shop" class="hover:underline"> Разработка на Tilda и Wordpress
                    </NuxtLink>
                </p>
                <p>
                    <NuxtLink to="/services/frontend#site" class="hover:underline"> Мобильные приложения</NuxtLink>
                </p>
                <p>
                    <NuxtLink to="/services/frontend#repair" class="hover:underline"> Чат-боты</NuxtLink>
                </p>
            </div>
            <div class="w-80 md:w-72 text-center md:text-start px-3">
                <h4 class=" result text-xl mb-3 font-semibold">Поддержка и развитие</h4>
                <p>
                    <NuxtLink to="/services/backend#company" class="hover:underline"> Техническая поддержа
                    </NuxtLink>
                </p>
                <p>
                    <NuxtLink to="/services/backend#crm" class="hover:underline"> Абонентское обслуживание </NuxtLink>
                </p>
                <p>
                    <NuxtLink to="/services/backend#chat" class="hover:underline">Добработка вашего проекта</NuxtLink>
                </p>

            </div>
            <div class=" w-80 md:w-72 text-center   md:text-start px-3 ">
                <h4 class=" result text-xl mb-3 font-semibold ">Продвижение и маркетинг</h4>
                <p>
                    <NuxtLink to="/services/uiux#maket" class="hover:underline"> Социальные сети </NuxtLink>
                </p>
                <p>
                    <NuxtLink to="/services/uiux#web" class="hover:underline"> Реклама </NuxtLink>
                </p>
                <p>
                    <NuxtLink to="/services/uiux#mobile" class="hover:underline"> AI-маркетинг</NuxtLink>
                </p>

            </div>
            <div class=" w-80 md:w-72 text-center   md:text-start px-3">
                <h4 class=" result text-xl mb-3 font-semibold">Бренд и дизайн</h4>
                <p>
                    <NuxtLink to="/services/graphic_design#business" class="hover:underline"> Айдентика
                    </NuxtLink>
                </p>
                <p>
                    <NuxtLink to="/services/graphic_design#netvisual" class="hover:underline"> UI/IX дизайн
                    </NuxtLink>
                </p>
            </div>

        </div>
        <hr class=" border-blue-300 border-1 mt-12" />
        <div class="flex flex-col text-blue-400  md:flex-row  items-center container mx-auto md:justify-between  p-5">
            <div class="mt-4">
                <p class="text-center md:text-start"> Все права защищены &copy VM-it </p>
            </div>

            <div class="mt-4">
                <p class="text-center  md:text-start">
                    <NuxtLink to="/privacy_policy" class="result dark:text-red-500 hover:underline mt-2"> Политика
                        обработки персональных данных </NuxtLink>
                </p>
            </div>

            <div class="mt-4">
                <a class="link-offset-1 link-light fs-2" href="https://t.me/itbirds" target="_blank"
                    rel="noopener noreferrer"><img src="../public/images/telegram.svg"  alt="" class="p-1 w-12 h-12"> </a>
            </div>

            <div class="mt-4">
                <div> <a href="mailto:mail@it-birds.ru">mail@vm-it.ru</a> - написать нам
                    <div><a href="tel:73822489504">+7-913-820-86-10</a></div>
                </div>
            </div>




            <!-- 
            <div class=" flex flex-col  md:flex-row  items-center mt-4">
                <div> <a class="link-offset-1 link-light fs-2 " href="https://t.me/itbirds" target="_blank"
                        rel="noopener noreferrer"><img src="../public/images/telegram.svg" alt="" class="p-1"> </a>
                </div>
                <div> <a href="mailto:mail@it-birds.ru">mail@vm-it.ru</a> - написать нам
                    <div><a href="tel:73822489504">+7-913-820-86-10</a></div>
                </div>
            </div> -->
        </div>
    </footer>
</template>
