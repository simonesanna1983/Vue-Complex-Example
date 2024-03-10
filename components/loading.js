Vue.component('loading', {
  props: ['show'],
  template: `<div v-show="show" class="text-center text-secondary">
                  <div class="spinner-border m-5" role="status">
                  </div>
             </div>`,
});
