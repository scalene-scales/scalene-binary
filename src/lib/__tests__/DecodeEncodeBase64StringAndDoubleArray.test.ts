import decodeBase64StringAsDoubleArray from "lib/decodeBase64StringAsDoubleArray";
import encodeDoubleArrayAsBase64String from "lib/encodeDoubleArrayAsBase64String";

test("encodes and decodes an empty array", () => {
  const value: Array<number> = [];

  const encoded = encodeDoubleArrayAsBase64String(value);

  expect(encoded).toBe("");

  const decoded = decodeBase64StringAsDoubleArray(encoded);

  expect(decoded).toEqual(value);
});

test("encodes and decodes a single double", () => {
  const value = [3.14];

  const encoded = encodeDoubleArrayAsBase64String(value);

  expect(encoded).toBe("H4XrUbgeCUA=");

  const decoded = decodeBase64StringAsDoubleArray(encoded);

  expect(decoded).toEqual(value);
});

test("encodes and decodes multiple doubles", () => {
  const value = [
    0.7371923720929772, 0.9694351863581687, 0.22013063845224679, 83680,
  ];

  const encoded = encodeDoubleArrayAsBase64String(value);

  expect(encoded).toBe("AAAgdRSX5z8AAKDwnAXvPwAAgKI9Lcw/AAAAAABu9EA=");

  const decoded = decodeBase64StringAsDoubleArray(encoded);

  expect(decoded).toEqual(value);
});
