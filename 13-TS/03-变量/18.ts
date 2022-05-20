// 接口
// 用类型声明
type InfoType = { name: string; age?: number };
// 用接口声明
interface InfoInterface {
  name: string;
  age?: number;
}

const info: InfoType = { name: "gaf", age: 18 };

const info1: InfoInterface = { name: "gaf" };

// 索引类型
interface IndexLanguage {
  [index: number]: string;
}
const frontLanguage: IndexLanguage = {
  0: "HTML",
  1: "JS",
};
const iconLanguage: IndexLanguage = {
  0: "123",
  1: "5",
  3: "54651",
};

interface LanguageYear {
  [index: string]: number;
}
const languageYear: LanguageYear = {
  "0": 1,
  "1": 2,
  "3": 5,
};

// 使用接口定义函数
// 可调用的接口
interface CalcFn {
  (n2: number, n1: number): number;
}

const fn: CalcFn = (num1, num2) => 12;
fn(1, 3);

// 接口的继承
interface ISwim {
  swimming: () => void;
}
interface IFly {
  flying: () => void;
}

interface IAction extends ISwim, IFly {}
const p: IAction = { swimming() {}, flying() {} };

// 交叉类型
type WType1 = ISwim | IFly;
type WType2 = ISwim & IFly;

const myType1: WType1 = { swimming() {} };

const myType2: WType2 = { swimming() {}, flying() {} };

export {};
