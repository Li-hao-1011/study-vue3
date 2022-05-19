const info = {
  name: "why",
  age: 18,
};

type Method = "GET" | "POST";
type Option = {
  url: string;
  methods: Method;
};
function request(url: string, method: Method) {}
const options = {
  url: "www.baidu.com",
  methods: "POST",
} as const;

request(options.url, options.methods);

export {};
