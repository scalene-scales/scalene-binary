import { HEX_CHARACTERS_IN_64_BITS } from "lib/constants";
import decode from "lib/decodeHexStringAsBigintOf64BitsArray";
import encode from "lib/encodeBigintOf64BitsArrayAsHexString";

// Workaround for https://github.com/facebook/jest/issues/11617.
function stringify(arr: ReadonlyArray<bigint>): Array<string> {
  return arr.map((item) => item.toString());
}

function expectEqualBigintArrays(
  received: ReadonlyArray<bigint>,
  expected: ReadonlyArray<bigint>
) {
  expect(stringify(received)).toEqual(stringify(expected));
}

test("encodes and decodes an empty array", () => {
  const value: ReadonlyArray<bigint> = [];

  const encoded = encode(value);

  expect(encoded).toBe("");

  const decoded = decode(encoded);

  expectEqualBigintArrays(decoded, value);
});

test("encodes and decodes a single uint32", () => {
  const value: ReadonlyArray<bigint> = [11n];

  const encoded = encode(value);

  expect(encoded).toBe("0b00000000000000");
  expect(encoded.length % HEX_CHARACTERS_IN_64_BITS).toBe(0);
  expect(encoded.length).toBe(HEX_CHARACTERS_IN_64_BITS * value.length);

  const decoded = decode(encoded);

  expectEqualBigintArrays(decoded, value);
});

test("encodes and decodes multiple uint32", () => {
  const value: ReadonlyArray<bigint> = [316621733129n, 68719476736n];

  const encoded = encode(value);

  expect(encoded).toBe("093d20b8490000000000000010000000");
  expect(encoded.length % HEX_CHARACTERS_IN_64_BITS).toBe(0);
  expect(encoded.length).toBe(HEX_CHARACTERS_IN_64_BITS * value.length);

  const decoded = decode(encoded);

  expectEqualBigintArrays(decoded, value);
});
