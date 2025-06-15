import { defineStore } from 'pinia'

export const useCounterStore = defineStore('mystore', {
    state: () => ({
        images: [
            {
                img: '/images/1.png',
                type: 'Сайты и сервисы',
                long: '3-12 недель',
            },
            {
                img: '/images/2.png',
                type: 'Разработка на Tilda',
                long: '3-12 недель',
            },
            {
                img: '/images/3.png',
                type: 'Мобильные приложения',
                long: '2-4 недели',
            },
            {
                img: '/images/4.png',
                type: 'Чат-боты',
                long: '2-4 недели',
            },
            {
                img: '/images/5.png',
                type: 'Техническая поддержка',
                long: '2-4 недели',
            },
            {
                img: '/images/6.png',
                type: 'Доработка и обновление',
                long: 'по договоренности',
            },
            {
                img: '/images/7.png',
                type: 'SMM',
                long: '1-2 недели',
            },
            {
                img: '/images/8.png',
                type: 'Маркетинг',
                long: '1-2 недели',
            },
            {
                img: '/images/9.png',
                type: 'Айдентика',
                long: 'UI/UX дизайн',
            }
        ],
        blocks2: [
            {
                item_img: '/images/streamline_business-idea-money-solid.png',
                item_text_before: 'Малый бизнес',
                item_text_after: 'Сайт-визитка, базовое SEO, таргетировання реклама.',
            },
            {
                item_img: '/images/famicons_business-sharp.png',
                item_text_before: 'Средний бизнес',
                item_text_after: 'Масштабирование ваших продуктов, создание новых, доработка существующих, аналитика бизнес процессов. ',
            },
            {
                item_img: '/images/ic_round-real-estate-agent.png',
                item_text_before: ' Гос. организции',
                item_text_after: 'Цифровые платформы, индеграция с 1-C, индивидуальная разработка.',
            },
            {
                item_img: '/images/fa-solid_business-time.png',
                item_text_before: 'Стартапы',
                item_text_after: 'Продвижение, маркетинг, РСЯ, индивидуальные IT-решения.',
            },
            {
                item_img: '/images/tdesign_shop-filled.png',
                item_text_before: 'Ритейл',
                item_text_after: 'CRM, системы лояльности, эквайринг.',
            },
            {
                item_img: '/images/streamline_business-handshake-solid.png',
                item_text_before: 'Некоммерческие организации',
                item_text_after: 'IT-инструменты для управления, системы оповешения, боты.',
            },
        ]

    }),
})