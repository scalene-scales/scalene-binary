import { THexString_Length32 } from "../types";

export default function sanitizeAsHexString_Length32(
  seed: string
): THexString_Length32 {
  // Note, lower case the strings so that string equality works.
  const hexSeed = seed.replaceAll(/[^0-9a-fA-F]/g, "").toLowerCase();

  if (hexSeed.length < 32) {
    // Fill with 1 since PRNGs tend to dislike 0 seeds.
    return hexSeed.padStart(32, "f") as THexString_Length32;
  } else if (hexSeed.length > 32) {
    return hexSeed.slice(-32) as THexString_Length32;
  } else {
    return hexSeed as THexString_Length32;
  }
}
