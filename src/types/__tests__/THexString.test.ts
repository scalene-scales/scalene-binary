import { THexString, THexString_Length32 } from "types";

import { assert } from "conditional-type-checks";

// From ts-essentials.
type Assignable<T, U> = U extends T ? true : false;

test("THexString and variants should be compatiable", () => {
  assert<Assignable<THexString, THexString_Length32>>(true);

  assert<Assignable<THexString_Length32, THexString>>(false);
});

test("THexString should be extendable via __type brands", () => {
  type TSuperType = THexString;
  type TMyType = TSuperType & { __type: "MyType" };

  assert<Assignable<TSuperType, TMyType>>(true);
  assert<Assignable<TMyType, TSuperType>>(false);
});

test("THexStringLength32 should be extendable via __type brands", () => {
  type TSuperType = THexString_Length32;
  type TMyType = TSuperType & { __type: "MyType" };

  assert<Assignable<TSuperType, TMyType>>(true);
  assert<Assignable<TMyType, TSuperType>>(false);

  assert<Assignable<THexString, TMyType>>(true);
  assert<Assignable<TMyType, THexString_Length32>>(false);
});
