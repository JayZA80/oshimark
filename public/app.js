const app = Vue.createApp({
    data() {
        return {
            liked: false,
            likes: 11000
        }
    },
    methods: {
        toggleLiked() {
            if (this.liked === false) {
                this.likes++;
            } else {
                this.likes--;
            }
            this.liked = !this.liked;
        }
    }
}); // Creates Vue app

app.mount('#root'); // Root element for Vue app
