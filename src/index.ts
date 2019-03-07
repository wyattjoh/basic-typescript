interface BigInterface {
  a: number;
  b: number;
  c: number;
  d: number;
}

type PartialBigInterface = Pick<BigInterface, "a">;
