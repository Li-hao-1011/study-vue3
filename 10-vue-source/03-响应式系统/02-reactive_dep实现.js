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

let acctiveEffect = null;

// 收集器
function watchEffect(effect) {
  acctiveEffect = effect;
  dep.depend();
  effect();
  acctiveEffect = null;
}

const info = { counter: 100 };

watchEffect(function () {
  console.log(info.counter * 2);
});

watchEffect(function powerCounter() {
  console.log(info.counter + 1000);
});

const dep = new Dep();

setTimeout(() => {
  info.counter++;
  dep.notify();
}, 2000);
