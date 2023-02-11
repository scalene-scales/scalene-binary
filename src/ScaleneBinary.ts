import decodeBase64StringAsDoubleArray from "lib/decodeBase64StringAsDoubleArray";
import encodeDoubleArrayAsBase64String from "lib/encodeDoubleArrayAsBase64String";

const ScaleneBinary = {
  decodeBase64StringAsDoubleArray: decodeBase64StringAsDoubleArray,
  encodeDoubleArrayAsBase64String: encodeDoubleArrayAsBase64String,
} as const;

export default ScaleneBinary;
