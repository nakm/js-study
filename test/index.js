import test from "ava";

test(async t => {  
  let foo = Promise.resolve("foo");
  t.is(await foo, "foo");
});