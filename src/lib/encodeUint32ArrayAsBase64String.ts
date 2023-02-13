import { Buffer } from "buffer";
import { TBase64String_BitsMod32 } from "../types";
import { BYTES_IN_UINT32 } from "./constants";

export default function encodeUint32ArrayAsBase64String(
  nums: ReadonlyArray<number>
): TBase64String_BitsMod32 {
  const buffer = new ArrayBuffer(BYTES_IN_UINT32 * nums.length);
  const view = new DataView(buffer);

  for (let i = 0; i < nums.length; i++) {
    view.setUint32(BYTES_IN_UINT32 * i, nums[i]!, true);
  }

  const bytes = new Uint8Array(buffer);
  return Buffer.from(bytes).toString("base64") as TBase64String_BitsMod32;
}
