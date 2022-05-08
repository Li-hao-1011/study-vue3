let acctiveEffect = null;

// 依赖收集
class Dep {
  constructor() {
    this.subscriber = new Set();
  }

  addEffect(effect) {
    this.subscriber.add(effect);
  }

  depend() {
    if (acctiveEffect !== null) {
      this.subscriber.add(acctiveEffect);
    }
  }

  notify() {
    this.subscriber.forEach((effect) => {
      effect();
    });
  }
}

// 收集器
function watchEffect(effect) {
  acctiveEffect = effect;
  effect();
  acctiveEffect = null;
}

const targetMap = new WeakMap();
function getDep(target, key) {
  let depsMap = targetMap.get(target);

  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Dep();
    depsMap.set(key, dep);
  }

  return dep;
}

function reactive(raw) {
  // 数据劫持
  // Vue3的实现 Proxy
  return new Proxy(raw, {
    get(target, key) {
      const dep = getDep(target, key);
      dep.depend();
      return target[key];
    },
    set(target, key, newValue) {
      const dep = getDep(target, key);
      target[key] = newValue;
      dep.notify();
    },
  });
}

/* const info = reactive({ counter: 100 });
const user = reactive({ name: "why" }); */

/* // 1
watchEffect(function () {
  console.log("effect1", info.counter * 2);
});
// 2
watchEffect(function powerCounter() {
  console.log("effect2", info.counter + 1000);
});

watchEffect(function powerCounter() {
  console.log("effect3", user.name);
}); */

// const dep = new Dep();

/* setTimeout(() => {
  info.counter++;
}, 2000);

setTimeout(() => {
  user.name = "lhhhhhhh";
  // dep.notify();
}, 5000);
 */