export type TBase64String = string & { __data: "Base64String" };

export type TBase64String_BitsMod32 = TBase64String & { __mod32: 32 };
export type TBase64String_BitsMod64 = TBase64String_BitsMod32 & { __mod64: 64 };
export type TBase64String_Bits32 = TBase64String_BitsMod32 & { __bits: 32 };
export type TBase64String_Bits64 = TBase64String_BitsMod64 & { __bits: 64 };
export type TBase64String_Bits96 = TBase64String_BitsMod32 & { __bits: 96 };
export type TBase64String_Bits128 = TBase64String_BitsMod64 & { __bits: 128 };

export type THexString = string & { __data: "HexString" };

export type THexString_LengthMod8 = THexString & { __mod8: 8 };
export type THexString_LengthMod16 = THexString_LengthMod8 & { __mod16: 16 };
export type THexString_Length32 = THexString_LengthMod16 & { __length: 32 };
