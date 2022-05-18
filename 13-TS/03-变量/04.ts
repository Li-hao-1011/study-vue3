function printPoint(point: { x: number; y: string; z?: number }) {}

printPoint({ x: 0, y: "1" });
printPoint({ x: 0, y: "1", z: 1 });
export {};
