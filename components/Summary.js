import { ref, onMounted } from "vue";

export default {
  setup() {
    const summary = ref(null);
    onMounted(() => {
      fetch("../jsons/summary.json")
        .then((response) => response.json())
        .then((response) => {
          summary.value = response.summary;
          console.log(response.summary)
        });
    });
    return {
      summary,
    };
  },
  template: `<div v-cloak class="col-md-12 col-xl-4">
    <div
      class="card comp-card"
      v-for="(item, index) in summary"
      :key="index"
    >
      <div class="card-body">
        <div class="row align-items-center">
          <div class="col">
            <h6 class="m-b-25">{{item.title}}</h6>
            <h3 class="f-w-700 text-c-blue">
              {{item.value}}
            </h3>
            <p class="m-b-0">
              {{item.duration}} ({{item.year}})
            </p>
          </div>
          <div class="col-auto">
            <i class="fas fa-eye bg-c-blue"></i>
          </div>
        </div>
      </div>
    </div>
  </div>`,
};
