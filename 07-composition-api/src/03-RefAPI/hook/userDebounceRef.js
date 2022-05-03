// coustomRef
import { setTimeout } from "core-js";
import { customRef } from "vue";

/**
 * customRef实现防抖
 * @export
 * @param {*} value
 * @return {*}
 */
export default function (value) {
  return customRef((track, trigger) => {
    let timer = null;
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, 1000);
      },
    };
  });
}
