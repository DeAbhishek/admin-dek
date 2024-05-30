import { ref, onMounted } from "vue";

export default {
  setup() {
    const whatsNew = ref(null);
    onMounted(() => {
        fetch("../jsons/Whats_New.json")
        .then((response) => response.json())
        .then((response) => {
          whatsNew.value = response.what_new_items;
        });
    });

    return {
      whatsNew,
    };
  },
  template: `<div class="col-xl-4 col-md-12" v-cloak>
  <div class="card latest-update-card">
    <div class="card-header">
      <h5>What’s New</h5>
      <div class="card-header-right">
        <ul class="list-unstyled card-option">
          <li class="first-opt">
            <i
              class="feather icon-chevron-left open-card-option"
            ></i>
          </li>
          <li>
            <i
              class="feather icon-maximize full-card"
            ></i>
          </li>
          <li>
            <i
              class="feather icon-minus minimize-card"
            ></i>
          </li>
          <li>
            <i
              class="feather icon-refresh-cw reload-card"
            ></i>
          </li>
          <li>
            <i
              class="feather icon-trash close-card"
            ></i>
          </li>
          <li>
            <i
              class="feather icon-chevron-left open-card-option"
            ></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-block">
      <div
        class="slimScrollDiv"
        style="
          position: relative;
          overflow: hidden;
          width: auto;
          height: 290px;
        "
      >
        <div
          class="scroll-widget"
          style="
            overflow: hidden;
            width: auto;
            height: 290px;
          "
        >
          <div class="latest-update-box">
            <div
              class="row p-t-20 p-b-30"
              v-for="(item, index) in whatsNew"
              :key="index"
            >
              <div
                class="col-auto text-right update-meta p-r-0"
                v-if="item.created_by === 'Jonny michel'"
              >
                <img
                  src="./template_files/avatar-4.jpg"
                  alt="user image"
                  class="img-radius img-40 align-top m-r-15 update-icon"
                />
              </div>
              <div
                class="col-auto text-right update-meta p-r-0"
                v-else
              >
                <i
                  class="feather icon-briefcase bg-c-red update-icon"
                  :class="item.message==='You have 3 pending Task.' ? 'icon-briefcase bg-c-red' : 'icon-check f-w-600 bg-c-green'"
                ></i>
              </div>

              <div class="col p-l-5">
                <a href="#!"
                  ><h6>{{item.message}}</h6></a
                >
                <p class="text-muted m-b-0">
                  {{item.created_by}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="slimScrollBar"
          style="
            background: rgb(0, 0, 0);
            width: 5px;
            position: absolute;
            top: 0px;
            opacity: 0.4;
            display: none;
            border-radius: 7px;
            z-index: 99;
            right: 1px;
            height: 186.475px;
          "
        ></div>
        <div
          class="slimScrollRail"
          style="
            width: 5px;
            height: 100%;
            position: absolute;
            top: 0px;
            display: none;
            border-radius: 7px;
            background: rgb(51, 51, 51);
            opacity: 0.2;
            z-index: 90;
            right: 1px;
          "
        ></div>
      </div>
    </div>
  </div>
</div>`,
};
