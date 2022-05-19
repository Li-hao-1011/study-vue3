/* typeof 的类型缩小 */
type IDType = number | string;
function printID(id: IDType) {
  if (typeof id === "string") {
    console.log(id.toLocaleLowerCase());
  } else {
    console.log(id);
  }
}

//
type Direction = "left" | "right" | "top" | "bottom";
function printDirection(direction: Direction) {
  switch (direction) {
    case "left":
      break;
    case "right":
      break;
    case "top":
      break;
    case "bottom":
      break;
  }
}

function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time);
  }
}

export {};
