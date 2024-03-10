Vue.component('carousel', {
  props: ['photos'],
  template: `
  <div
  id="carouselExampleControls"
  class="carousel slide"
  data-bs-ride="carousel"
  style="width: 300px"
>
  <div class="carousel-inner">
    <div class="carousel-item" v-bind:class="{ 'active': index === 0}" v-for="(photo, index) in photos" :key="photo.id">
      <img
        :src="photo.url"
        class="d-block w-100"
        alt="no picture"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  <button @click="emitValue">Send Value to Parent</button>

</div>
  `,

  methods: {
    emitValue() {
      // Emit custom event with value
      this.$emit('value-selected', 'Hello from child');
    },
  },
});
