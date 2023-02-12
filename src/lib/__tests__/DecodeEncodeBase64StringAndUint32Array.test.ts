import decodeBase64StringAsUint32Array from "lib/decodeBase64StringAsUint32Array";
import encodeUint32ArrayAsBase64String from "lib/encodeUint32ArrayAsBase64String";

test("encodes and decodes an empty array", () => {
  const value: Array<number> = [];

  const encoded = encodeUint32ArrayAsBase64String(value);

  expect(encoded).toBe("");

  const decoded = decodeBase64StringAsUint32Array(encoded);

  expect(decoded).toEqual(value);
});

test("encodes and decodes a single uint32", () => {
  const value = [11];

  const encoded = encodeUint32ArrayAsBase64String(value);

  expect(encoded).toBe("CwAAAA==");

  const decoded = decodeBase64StringAsUint32Array(encoded);

  expect(decoded).toEqual(value);
});

test("encodes and decodes multiple uint32", () => {
  const value = [3166217129, 4163692421, 945453893, 83680];

  const encoded = encodeUint32ArrayAsBase64String(value);

  expect(encoded).toBe("qaO4vIXnLPhFe1o44EYBAA==");

  const decoded = decodeBase64StringAsUint32Array(encoded);

  expect(decoded).toEqual(value);
});
