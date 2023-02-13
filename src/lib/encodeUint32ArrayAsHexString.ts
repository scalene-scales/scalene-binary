import { Buffer } from "buffer";
import { THexString_LengthMod8 } from "types";
import { BYTES_IN_UINT32 } from "./constants";

export default function encodeUint32ArrayAsHexString(
  nums: ReadonlyArray<number>
): THexString_LengthMod8 {
  const buffer = new ArrayBuffer(BYTES_IN_UINT32 * nums.length);
  const view = new DataView(buffer);

  for (let i = 0; i < nums.length; i++) {
    view.setUint32(BYTES_IN_UINT32 * i, nums[i]!, true);
  }

  const bytes = new Uint8Array(buffer);
  return Buffer.from(bytes).toString("hex") as THexString_LengthMod8;
}
