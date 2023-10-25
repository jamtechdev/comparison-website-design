
export function scaleBandInvert(scale, coord) {
  console.log(scale)
  console.log(coord)
    const eachBand = scale.step();
    const index = Math.floor((coord / eachBand));
    const val = scale.domain()[index];
    return val;
  }