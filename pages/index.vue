<template>
  <div class="">
    <div class=" h-72 font-medium">
      <H1 class="text-center text-5xl font-black ">IT-компания полного цикла:</H1>
      <H2 class="text-center text-5xl font-black leading-relaxed">разработка, дизайн и продвижение</H2>
      <div class="text-center flex justify-center mt-5 ">
        <H2 class="text-center text-xl"> Мы разрабатываем сайты и web-приложения, помогаем оцифровать ваши
          бизнес-процессы.
          <br>
          Мы работаем начиная с концепции вашего приложения до полного запуска и продвижения вашего продукта.
        </H2>
      </div>
    </div>
    <div class="h-96 container mx-auto -2">

    </div>
    <hr class=" border-blue-300 border-1" />
    <div class="h-96mx-auto">
      <div class="text-xl flex justify-center font-black">
        <div class="container mt-2">Услуги</div>
      </div>
      <div class="flex justify-center">
        <div class="container">
          <Carousel class="my-12 px-12" :transition="1000" v-bind="carouselConfig">
            <Slide class="px-1" v-for="slide in store.images" :key="slide">
              <div class="h-68 w-72 rounded-3xl bg-sky-100 shadow-xl ">
                <img :src="slide.img" class="">
                <p class="mx-5 text-lg mt-2 font-bold ">{{ slide.type }} </p>
                <p class="mx-5 text-lg font-normal">{{ slide.long }}</p>
              </div>
            </Slide>
            <template #addons>
              <Navigation class="" />
            </template>
          </Carousel>
        </div>
      </div>
    </div>

    <hr class=" border-blue-300 border-1" />

    <div class="my-12">
      <div class="text-xl flex justify-center font-black">
        <div class="container mt-2">Наши преимущества</div>
      </div>
      <div class="flex justify-center">
        <div class=" container  flex mt-5">
          <div class="border-blue-300 border-t-8 border-b-8 border-l-8 w-4/5">
            <div class="flex h-42">
              <div
                class=" p-5 w-3/5 border-b-4  border-r-4 border-blue-300 transition-all duration-300 hover:bg-blue-300 hover:text-slate-50">
                <p class="text-2xl font-bold">Надежность</p>
                <p class="text-lg">Мы строим долгосрочное отношения с нашими клиентами, соблюдаем сроки, гарантируем
                  качество работы.</p>
              </div>
              <div
                class="border-b-4 border-l-4 border-blue-300 group p-5 w-3/5 border-r-2 transition-all duration-300 hover:bg-blue-300 hover:text-slate-50">
                <p class="text-2xl font-bold">Ответственность</p>
                <p class="text-lg">Мы несем ответственость за результаты нашей работы, стремимся к устойчивому развитию.
                </p>
              </div>

            </div>
            <div class="flex h-42 ">
              <div
                class="p-5 w-1/2 border-1 border-r-4 border-t-2 border-blue-300 transition-all duration-300 hover:bg-blue-300 hover:text-slate-50">
                <p class="text-2xl  font-bold">Прозрачность</p>
                <p class="text-lg">Открытость в общении в отношении к Вам.
                </p>
              </div>
              <div
                class="p-5 w-1/2 border-l-4  border-r-2 border-t-2 border-blue-300 transition-all duration-300 hover:bg-blue-300 hover:text-slate-50">
                <p class="text-2xl   font-bold">Индивидуальных подход</p>
                <p class="text-lg">Принимаем Ваши потребности и создаем решения. которые максимольно соответствуют
                  ожиданиям.
                </p>
              </div>
            </div>
          </div>
          <div
            class=" p-5 border-7 border-blue-300 w-1/3 transition-all duration-300 hover:bg-blue-300 hover:text-slate-50">
            <p class="text-2xl font-bold">Весь спектр услуг</p>
            <p class="text-lg"> Мы предлагаем все необходимые решения для вашего бизнеса в одной компании. от разработки
              сайта до сопровождения после внедрения продукта. </p>
          </div>
        </div>
      </div>
    </div>
    <hr class=" border-blue-300 border-1 mt-12" />
    <div class=" container flex justify-center  mx-auto mt-12">
      <div class="text-xl mt-2 font-black  w-1/2">Работаем со всеми</div>
      <div class=" mt-2  text-xl  w-1/2">Мы специализируемся на работе с цифровыми продуктами и брендами, независимо от
        размера и
        стадии жизненного цикла проекта, от стартапов до устоявшихся компаний, стремящихся создать бренд. которые будет
        выделяться.
      </div>
    </div>
  
    <div class="text-xl mt-2 font-black  mx-auto  container flex flex-wrap ">
      <div v-for="(index) in store.blocks2" :key="index" @mouseenter="setActive(index)" @mouseleave="clearActive"
        :class="[
          ' w-[33%]  my-12  transition-opacity duration-500 cursor-pointer',
          {
            'opacity-100': !activeIndex || activeIndex === index,
            'opacity-[0.3]': activeIndex && activeIndex !== index,
          }
        ]">

        <div class="  flex justify-center p-5 transition-all duration-1000 hover:scale-110 group">
          <img :src="index.item_img" class="">
          <p class="mt-12 mx-5 text-xl head  group-hover:hidden">{{index.item_text_before  }}</p>
          <p class="mt-12 mx-5 text-xl head hidden group-hover:block">{{index.item_text_after  }}</p>
        </div>
    

      </div>
    </div>


    <hr class=" border-blue-300 border-1 " />
    <div class="flex justify-center">
      <rainbow />
      <uplink />
    </div>
    <send_msg />
  </div>
</template>



<script setup>
import { useCounterStore } from '@/store/store'
const store = useCounterStore()
import 'vue3-carousel/carousel.css'
import { Carousel, Slide,  Navigation } from 'vue3-carousel'
const carouselConfig = {
  itemsToShow: 4.5,
  wrapAround: true,
}

import { ref } from 'vue';


const activeIndex = ref(null);

function setActive(index) {
  activeIndex.value = index;
}

function clearActive() {
  activeIndex.value = null;
}
</script>
