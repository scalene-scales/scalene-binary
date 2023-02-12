import { Buffer } from "buffer";
import { BYTES_IN_FLOAT32 } from "./constants";

export default function encodeFloatArrayAsBase64String(
  nums: ReadonlyArray<number>
): string {
  const buffer = new ArrayBuffer(BYTES_IN_FLOAT32 * nums.length);
  const view = new DataView(buffer);

  for (let i = 0; i < nums.length; i++) {
    view.setUint32(BYTES_IN_FLOAT32 * i, nums[i]!, true);
  }

  const bytes = new Uint8Array(buffer);
  return Buffer.from(bytes).toString("base64");
}
