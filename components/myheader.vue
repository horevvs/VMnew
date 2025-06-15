<template>
    <div class="fixed top-0 left-0 w-full">



        <div class="flex justify-around h-24">
            <div class="p-2 mt-5 flex">
                <img src="../public/images/Vm_logo.png" id="part" alt="" class="">
                <p class="mt-2 mx-5 text-3xl head">VM-IT</p>
            </div>
            <div class="flex justify-around w-1/3 mt-8">
                <menu_drop />
                <a href="/projects" class="text-2xl head">Проекты</a>
                <a href="/articles" class="text-2xl head">Статьи</a>
            </div>
            <a href="/contacts"
                class="text-xl head border-1 rounded-xl p-2 px-5 my-6 bg-slate-100 hover:bg-blue-100">Связаться с
                нами</a>
        </div>
    </div>
</template>
<style>
.head {
    font-family: Montserrat, sans-serif;
    font-weight: 700;
}
</style>
