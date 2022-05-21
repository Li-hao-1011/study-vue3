declare module "lodash" {
  export function join(arr: any[]): void;
}

declare let l_name: string;
declare let l_age: number;

declare let l_Foo: () => void;

declare class Person {
  name: string;
  age: number;
  constructor(name: string, age: number);
}

declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
declare module "*.jpg";

declare namespace $ {
  export function ajax(setting: any): any;
}
