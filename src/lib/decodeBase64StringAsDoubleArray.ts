import { Buffer } from "buffer";
import { BYTES_IN_FLOAT64 } from "lib/constants";

export default function decodeBase64StringAsDoubleArray(
  base64: string
): Array<number> {
  const bytes = Buffer.from(base64, "base64");
  const buffer = new ArrayBuffer(bytes.length);
  const view = new DataView(buffer);

  for (let i = 0; i < bytes.length; i++) {
    view.setUint8(i, bytes[i]!);
  }

  const floats = [];
  for (let i = 0; i < bytes.length / BYTES_IN_FLOAT64; i++) {
    floats.push(view.getFloat64(BYTES_IN_FLOAT64 * i, true));
  }
  return floats;
}
