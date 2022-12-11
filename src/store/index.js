import { createStore } from "vuex";
import exercise from "@/store/modules/exercise";
import modalWindow from "@/store/modules/modalWindow";

export default createStore({
  modules: {
    exercise,
    modalWindow,
  },
});
