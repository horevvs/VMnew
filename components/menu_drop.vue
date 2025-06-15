<template>
    <div>
        <p class="text-2xl head "> Услуги</p>
        <div class="p-4 space-y-4 max-w-md mx-auto">
            <!-- Пункт 1 -->
            <div class="relative group">
                <button class="w-full px-4 py-2 bg-blue-600 e rounded">Пункт 1</button>
                <!-- Подменю -->
                <div
                    class="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50 p-2">
                    <p class="mb-2">Текст для пункта 1. Например, описание или дополнительные сведения.</p>
                    <p>Еще один текст для пункта 1.</p>
                </div>
            </div>

            <!-- Пункт 2 -->
            <div class="relative group">
                <button class="w-full px-4 py-2 bg-green-600  rounded">Пункт 2</button>
                <!-- Подменю -->
                <div
                    class="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50 p-2">
                    <p>Текст для пункта 2. Описание или дополнительные сведения.</p>
                </div>
            </div>

            <!-- Пункт 3 -->
            <div class="relative group">
                <button class="w-full px-4 py-2 bg-red-600  rounded">Пункт 3</button>
                <!-- Подменю -->
                <div
                    class="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 z-50 p-2">
                    <p>Текст для пункта 3. Дополнительная информация.</p>
                </div>
            </div>
        </div>
    </div>
</template>