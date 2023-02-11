import { Buffer } from "buffer";
import { BYTES_IN_FLOAT64 } from "lib/constants";

export default function encodeDoubleArrayAsBase64String(
  nums: ReadonlyArray<number>
): string {
  const buffer = new ArrayBuffer(BYTES_IN_FLOAT64 * nums.length);
  const view = new DataView(buffer);

  for (let i = 0; i < nums.length; i++) {
    view.setFloat64(BYTES_IN_FLOAT64 * i, nums[i]!, true);
  }

  const bytes = new Uint8Array(buffer);
  return Buffer.from(bytes).toString("base64");
}
