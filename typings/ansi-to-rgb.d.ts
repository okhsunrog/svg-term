declare module "ansi-to-rgb" {
  type RGBTuple = [number, number, number];

  interface AnsiColors {
    [key: number]: RGBTuple;
  }

  const colors: AnsiColors;
  export default colors;
}
