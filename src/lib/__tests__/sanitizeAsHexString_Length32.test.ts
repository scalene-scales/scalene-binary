import sanitize from "lib/sanitizeAsHexString_Length32";

test("sanitizes an empty string to a hex string of length 32", () => {
  const rawString = "";

  const sanitizedString = sanitize(rawString);

  expect(sanitizedString.length).toBe(32);
  expect(sanitizedString).toBe("ffffffffffffffffffffffffffffffff");
});

test("sanitizes a very string to a hex string of length 32", () => {
  const rawString = "01234567890123456789012345678901234567890123456789";

  const sanitizedString = sanitize(rawString);

  expect(sanitizedString.length).toBe(32);
  expect(sanitizedString).toBe("89012345678901234567890123456789");
});

test("sanitizes a base64 string to a hex string of length 32", () => {
  const rawString = "lTfvZ5F6FN2UhVS2pRtLmA==";

  const sanitizedString = sanitize(rawString);

  expect(sanitizedString.length).toBe(32);
  expect(sanitizedString).toBe("fffffffffffffffffffffffff5f6f22a");
});

test("sanitizes a UUIDv4 string to a hex string of length 32", () => {
  const rawString = "d62ce507-17f5-4482-95f3-6c619e73d5d4";

  const sanitizedString = sanitize(rawString);

  expect(sanitizedString.length).toBe(32);
  expect(sanitizedString).toBe("d62ce50717f5448295f36c619e73d5d4");
});
