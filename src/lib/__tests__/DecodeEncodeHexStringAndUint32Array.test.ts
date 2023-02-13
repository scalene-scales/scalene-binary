import { HEX_CHARACTERS_IN_32_BITS } from "lib/constants";
import decode from "lib/decodeHexStringAsUint32Array";
import encode from "lib/encodeUint32ArrayAsHexString";
import { THexString_LengthMod8 } from "types";

test("encodes and decodes an empty array", () => {
  const value: Array<number> = [];

  const encoded = encode(value);

  expect(encoded).toBe("");

  const decoded = decode(encoded);

  expect(decoded).toEqual(value);
});

test("encodes and decodes a single uint32", () => {
  const value = [11];

  const encoded = encode(value);

  expect(encoded).toBe("0b000000");
  expect(encoded.length % HEX_CHARACTERS_IN_32_BITS).toBe(0);
  expect(encoded.length).toBe(HEX_CHARACTERS_IN_32_BITS * value.length);

  const decoded = decode(encoded);

  expect(decoded).toEqual(value);
});

test("encodes and decodes multiple uint32", () => {
  const value = [3166217129, 4163692421, 945453893, 83680];

  const encoded = encode(value);

  expect(encoded).toBe("a9a3b8bc85e72cf8457b5a38e0460100");
  expect(encoded.length % HEX_CHARACTERS_IN_32_BITS).toBe(0);
  expect(encoded.length).toBe(HEX_CHARACTERS_IN_32_BITS * value.length);

  const decoded = decode(encoded);

  expect(decoded).toEqual(value);
});

// Consider not supporting this format (if so, that's a breaking change).
test("decodes multiple uint32 encoded with capital letters", () => {
  const value = [3166217129, 4163692421, 945453893, 83680];

  const decoded = decode(
    "A9A3B8BC85E72CF8457B5A38E0460100" as THexString_LengthMod8
  );

  expect(decoded).toEqual(value);
});
