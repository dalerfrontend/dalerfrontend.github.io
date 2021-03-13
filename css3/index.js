const app = Vue.createApp({
  data() {
    return {
      tab: 'pizza',
      animation: ''
    }
  },
  methods: {
    toggle() {
      switch (this.animation) {
        case '':
          this.animation = 'animate-open';
          break;
        case 'animate-open':
          this.animation = 'animate-close';
          break;
        case 'animate-close':
          this.animation = 'animate-open';
          break;
      }
    }
  }
});

app.mount('.wrapper');
