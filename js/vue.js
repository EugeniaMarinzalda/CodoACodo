const { createApp } = Vue;

createApp({
    data() {
        return {
            items: []
        };
    },
    created() {
        this.dataFetch();
    },
    methods: {
        async dataFetch() {
            try {
                const res = await fetch("https://sebas350.github.io/api/db.json");
                if (!res.ok) {
                    throw new Error('mala respuesta de red');
                }
                const data = await res.json();
                this.items = data;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        backgroundImg(url) {
            return { backgroundImage: `url(${url})` };
        }
    }
}).mount('#staff');
