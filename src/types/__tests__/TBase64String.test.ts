import {
  TBase64String,
  TBase64String_Bits128,
  TBase64String_Bits64,
} from "types";

import { assert } from "conditional-type-checks";

// From ts-essentials.
type Assignable<T, U> = U extends T ? true : false;

test("TBase64String and variants should be compatiable", () => {
  assert<Assignable<TBase64String, TBase64String_Bits128>>(true);

  assert<Assignable<TBase64String, TBase64String_Bits64>>(true);

  assert<Assignable<TBase64String_Bits128, TBase64String>>(false);
  assert<Assignable<TBase64String_Bits64, TBase64String>>(false);
  assert<Assignable<TBase64String_Bits128, TBase64String_Bits64>>(false);
  assert<Assignable<TBase64String_Bits64, TBase64String_Bits128>>(false);
});

test("TBase64String should be extendable via __type brands", () => {
  type TSuperType = TBase64String;
  type TMyType = TSuperType & { __type: "MyType" };

  assert<Assignable<TSuperType, TMyType>>(true);
  assert<Assignable<TMyType, TSuperType>>(false);
});

test("TBase64StringBits64 should be extendable via __type brands", () => {
  type TSuperType = TBase64String_Bits64;
  type TMyType = TSuperType & { __type: "MyType" };

  assert<Assignable<TSuperType, TMyType>>(true);
  assert<Assignable<TMyType, TSuperType>>(false);

  assert<Assignable<TBase64String_Bits128, TMyType>>(false);
  assert<Assignable<TMyType, TBase64String_Bits128>>(false);
  assert<Assignable<TMyType, TSuperType>>(false);
  assert<Assignable<TMyType, TBase64String>>(false);
});

test("TBase64StringBits64 should be extendable via __type brands", () => {
  type TSuperType = TBase64String_Bits128;
  type TMyType = TSuperType & { __type: "MyType" };

  assert<Assignable<TSuperType, TMyType>>(true);
  assert<Assignable<TMyType, TSuperType>>(false);

  assert<Assignable<TBase64String_Bits64, TMyType>>(false);
  assert<Assignable<TMyType, TBase64String_Bits128>>(false);
  assert<Assignable<TMyType, TSuperType>>(false);
  assert<Assignable<TMyType, TBase64String>>(false);
});
