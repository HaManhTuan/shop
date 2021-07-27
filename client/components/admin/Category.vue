<template>
  <div>
    <div class="row wrapper border-bottom white-bg page-heading">
      <div class="col-lg-10">
        <h2>Category</h2>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <NuxtLink to="/admin">
              Home
            </NuxtLink>
          </li>
          <li class="breadcrumb-item">
            <a>Category</a>
          </li>
        </ol>
      </div>
      <div class="col-lg-2"></div>
    </div>
    <div class="wrapper wrapper-content animated fadeIn">
      <div class="row">
        <div class="col-lg-12">
          <div class="ibox ">
            <div class="ibox-title">
              <h5>List Category</h5>
              <button
                class="btn btn-primary dim"
                type="button"
                data-toggle="modal"
                data-target="#myModal"
                style="margin-left: 20px; margin-top: 10px"
              >
                <i class="fa fa-plus"></i>
              </button>
              <button
                v-if="isChecked"
                class="btn btn-danger"
                style="margin-right: 5px"
              >
                Delete {{ countSelect }} item ?
              </button>
            </div>
            <div class="ibox-content">
              <div class="row">
                <div class="col-sm-4 m-b-xs">
                  <select
                    class="form-control-sm form-control input-s-sm inline"
                  >
                    <option value="0">Option 1</option>
                    <option value="1">Option 2</option>
                    <option value="2">Option 3</option>
                    <option value="3">Option 4</option>
                  </select>
                </div>
                <div class="col-sm-8">
                  <div class="input-group">
                    <input
                      placeholder="Search"
                      type="text"
                      class="form-control form-control-sm"
                    />
                    <span class="input-group-append">
                      <button type="button" class="btn btn-sm btn-primary">
                        Go!
                      </button>
                    </span>
                  </div>
                </div>
              </div>
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>
                        <label class="container-cb">
                          <input
                            v-model="allSelected"
                            type="checkbox"
                            @click="checkAllItem"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Date</th>
                      <th style="width: 60px;">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in categories">
                      <td>
                        <label class="container-cb">
                          <input
                            v-model="itemCheck"
                            type="checkbox"
                            :value="item.id"
                            @change="selectItem()"
                          />
                          <span class="checkmark"></span>
                        </label>
                      </td>
                      <td>{{ item.id }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.img }}</td>
                      <td>{{ item.date }}</td>
                      <td>
                        <button
                          class="btn btn-warning btn-rounded"
                          @click="showCate(item.id)"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="myModal"
      class="modal inmodal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content animated bounceInRight">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              <span aria-hidden="true">×</span
              ><span class="sr-only">Close</span>
            </button>
            <h4 class="modal-title">Add Category</h4>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label>Image</label>
                <input type="file" class="form-control dropify" />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea
                  rows="3"
                  class="form-control"
                  placeholder="Enter description"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-white" data-dismiss="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div
      id="editModal"
      class="modal inmodal"
      :class="{ showModalEdit: showEditModal }"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content animated bounceInRight">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" @click="closeModal">
              <span aria-hidden="true">×</span
              ><span class="sr-only">Close</span>
            </button>
            <h4 class="modal-title">Edit Category</h4>
          </div>
          <div class="modal-body">
            <form role="form">
              <div class="form-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter name"
                  class="form-control"
                />
              </div>
              <div class="form-group">
                <label>Image</label>
                <input type="file" class="form-control dropify" />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea
                  rows="3"
                  class="form-control"
                  placeholder="Enter description"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-white" data-dismiss="modal" @click="closeModal">
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="showEditModal" class="modal-backdrop show"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEditModal: false,
      allSelected: false,
      countSelect: null,
      itemCheck: [],
      isChecked: false,
      categories: [
        {
          id: 1,
          name: "Clothing",
          image: "",
          date: "2021/02/12"
        },
        {
          id: 2,
          name: "Shirts",
          image: "",
          date: "2021/02/12"
        }
      ]
    };
  },
  head() {
    return {
      script: [
        {
          src: "/js/plugins/iCheck/icheck.min.js"
        }
      ]
    };
  },
  mounted() {
    $(".dropify").dropify();
  },
  methods: {
    selectItem() {
      if (this.itemCheck.length > 0) {
        this.isChecked = true;
        this.countSelect = this.itemCheck.length;
      } else {
        this.isChecked = false;
      }
      if (this.categories.length === this.itemCheck.length) {
        this.allSelected = true;
      } else {
        this.allSelected = false;
      }
    },
    checkAllItem() {
      this.itemCheck = [];
      if (!this.allSelected) {
        this.isChecked = true;
        for (const item in this.categories) {
          this.itemCheck.push(this.categories[item].id);
        }
        this.countSelect = this.itemCheck.length;
      } else {
        this.isChecked = false;
      }
    },
    showCate(idCate) {
      this.showEditModal = true;
    },
    closeModal() {
      this.showEditModal = false;
    }
  }
};
</script>

<style scoped lang="scss">
.group-btn-del {
  padding-right: 15px;
  display: flex;
  justify-content: flex-end;
}
/* Customize the label (the container) */
.container-cb {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container-cb input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container-cb:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container-cb input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container-cb input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container-cb .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.showModalEdit {
  display: block;
}
</style>
