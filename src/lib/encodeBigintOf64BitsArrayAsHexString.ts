import { Buffer } from "buffer";
import { THexString_LengthMod16 } from "../types";
import { BYTES_IN_UINT64 } from "./constants";

export default function encodeBigintOf64BitsArrayAsHexString(
  nums: ReadonlyArray<bigint>
): THexString_LengthMod16 {
  const buffer = new ArrayBuffer(BYTES_IN_UINT64 * nums.length);
  const view = new DataView(buffer);

  for (let i = 0; i < nums.length; i++) {
    view.setBigUint64(BYTES_IN_UINT64 * i, nums[i]!, true);
  }

  const bytes = new Uint8Array(buffer);
  return Buffer.from(bytes).toString("hex") as THexString_LengthMod16;
}
