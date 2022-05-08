// 依赖收集
class Dep {
  constructor() {
    this.subscriber = new Set();
  }

  addEffect(effect) {
    this.subscriber.add(effect);
  }

  notify() {
    this.subscriber.forEach((effect) => {
      effect();
    });
  }
}

const info = { counter: 100 };

function doubleCounter() {
  console.log(info.counter * 2);
}

function powerCounter() {
  console.log(info.counter + 1000);
}

const dep = new Dep();

dep.addEffect(doubleCounter);
dep.addEffect(powerCounter);

setTimeout(() => {
  info.counter++;
  dep.notify();
}, 2000);
