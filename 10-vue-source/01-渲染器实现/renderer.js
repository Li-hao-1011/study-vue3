const h = (tag, props, children) => {
  return {
    tag,
    props,
    children,
  };
};

const mount = (vnode, container) => {
  // vnode -> element
  // 创建出真是元素
  const el = (vnode.el = document.createElement(vnode.tag));

  // 处理 props, 属性
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key];

      if (key.startsWith("on")) {
        // 监听事件
        el.addEventListener(key.slice(2).toLocaleLowerCase(), value);
      } else {
        // 设置属性
        el.setAttribute(key, value);
      }
    }
  }

  // children 子节点
  if (vnode.children) {
    if (typeof vnode.children === "string") {
      el.textContent = vnode.children;
    } else {
      // Array
      vnode.children.forEach((item) => {
        // 递归
        mount(item, el);
      });
    }
  }

  // 挂载到 container
  container.appendChild(el);
};
