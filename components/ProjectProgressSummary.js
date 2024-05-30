import { ref, onMounted } from "vue";

export default {
  setup() {
    const projectProgressSummary = ref(null);
    onMounted(() => {
      fetch("../jsons/Project_Progress_Summary.json")
        .then((response) => response.json())
        .then((response) => {
          projectProgressSummary.value = response.project_progress_summary;
        });
    });

    return {
      projectProgressSummary,
    };
  },
  template: `<div class="col-xl-12" v-cloak>
  <div class="card proj-progress-card">
    <div class="card-block">
      <div class="row">
        <div
          class="col-xl-3 col-md-6"
          v-for="(item, index) in projectProgressSummary"
          :key="index"
        >
          <h6>{{item.title}}</h6>
          <h5 class="m-b-30 f-w-700">
            {{item.value}}<span
              class="text-c-green m-l-10"
              >{{item.percentage}}</span
            >
          </h5>
          <div class="progress">
            <div
              class="progress-bar bg-c-red"
              style="width: 25%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
};
