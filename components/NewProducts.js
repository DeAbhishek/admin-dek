import { ref, onMounted } from "vue";

export default {
  setup() {
    const newProducts = ref(null);
    onMounted(() => {
      fetch("../jsons/New_Products.json")
        .then((response) => response.json())
        .then((response) => {
          newProducts.value = response.new_products;
        });
    });

    return {
      newProducts,
    };
  },
  template: `
  <div class="col-md-12" v-cloak>
                            <div class="card table-card">
                              <div class="card-header">
                                <h5>New Products</h5>
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
                              <div class="card-block p-b-0">
                                <div class="table-responsive">
                                  <table class="table table-hover m-b-0">
                                    <thead>
                                      <tr>
                                        <th>Name</th>
                                        <th>Product Code</th>
                                        <th>Customer</th>
                                        <th>Status</th>
                                        <th>Rating</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="(item, index) in newProducts"
                                        :key="index"
                                      >
                                        <td>{{item.name}}</td>
                                        <td>{{item.product_code}}</td>
                                        <td>{{item.customer}}</td>
                                        <td>
                                          <label class="label label-danger"
                                            >{{item.status}}</label
                                          >
                                        </td>
                                        <td>
                                          <a
                                            href="#!"
                                            v-for="star in 5"
                                            :key="star"
                                            ><i
                                              class="fa fa-star f-12"
                                              :class="star<=item.rating ? 'text-c-yellow' : 'text-default'"
                                            ></i
                                          ></a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
  `,
};
