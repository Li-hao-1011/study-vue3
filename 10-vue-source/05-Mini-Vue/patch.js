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

// Patch 对比新旧vnode
const patch = (n1, n2) => {
  if (n1.tag !== n2.tag) {
    // 当前元素 所在的父元素
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    // 1.得到el对象，并且在n2中保存
    n2.el = n1.el;
    const el = n2.el;
    console.log(el);
    // 2.props属性
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    // 2.1 获取所有的newProps添加到el
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];

      if (oldValue !== newValue) {
        if (key.startsWith("on")) {
          // 监听事件
          el.removeEventListener(key.slice(2).toLocaleLowerCase(), oldValue);

          el.addEventListener(key.slice(2).toLocaleLowerCase(), newValue);
        } else {
          // 设置属性
          el.setAttribute(key, newValue);
        }
      }
    }
    // 2.2 删除newPropos
    for (const key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith("on")) {
          // 移除事件
          el.removeEventListener(
            key.slice(2).toLocaleLowerCase(),
            oldProps[key]
          );
        } else {
          // 移除属性
          el.removeAttribute(key);
        }
      }
    }

    // 3.子元素
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];

    if (typeof newChildren === "string") {
      // 字符内容
      if (typeof oldChildren === "string") {
        if (oldChildren !== newChildren) {
          console.log(n1);
          console.log(n2);
          console.log(el);
          el.textContent = newChildren;
        } else {
          el.innerHTML = newChildren;
        }
      }
    } else {
      // 数组内容
      if (typeof oldChildren === "string") {
        // 原VNode时字符串，新VNode不是
        el.innerHTML = "";
        newChildren.forEach((item) => {
          mount(item, el);
        });
      } else {
        // 新旧VNode都是数组
        const commonLength = Math.min(oldChildren.length, newChildren.length);

        // 1.公共长度进行比对
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }
        // 2.新VNode更长，添加
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((item) => {
            // 挂载
            mount(item, el);
          });
        }
        // 3.新VNode更短, 移除
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach((item) => {
            // 移除该元素
            el.removeChild(item.el);
          });
        }
      }
    }
  }
};
