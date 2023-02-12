import { Buffer } from "buffer";
import { BYTES_IN_UNIT32 } from "./constants";

export default function decodeBase64StringAsUint32Array(
  base64: string
): Array<number> {
  const bytes = Buffer.from(base64, "base64");
  const buffer = new ArrayBuffer(bytes.length);
  const view = new DataView(buffer);

  for (let i = 0; i < bytes.length; i++) {
    view.setUint8(i, bytes[i]!);
  }

  const uints = [];
  for (let i = 0; i < bytes.length / BYTES_IN_UNIT32; i++) {
    uints.push(view.getUint32(BYTES_IN_UNIT32 * i, true));
  }
  return uints;
}
