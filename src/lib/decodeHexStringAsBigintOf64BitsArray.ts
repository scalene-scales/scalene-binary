import { Buffer } from "buffer";
import { THexString_LengthMod8 } from "../types";
import { BYTES_IN_UINT64 } from "./constants";

export default function decodeHexStringAsBigintOf64BitsArray(
  hex: THexString_LengthMod8
): Array<bigint> {
  const bytes = Buffer.from(hex, "hex");
  const buffer = new ArrayBuffer(bytes.length);
  const view = new DataView(buffer);

  for (let i = 0; i < bytes.length; i++) {
    view.setUint8(i, bytes[i]!);
  }

  const bigints = [];
  for (let i = 0; i < bytes.length / BYTES_IN_UINT64; i++) {
    bigints.push(view.getBigUint64(BYTES_IN_UINT64 * i, true));
  }
  return bigints;
}
