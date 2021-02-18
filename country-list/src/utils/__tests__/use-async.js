import { act, renderHook } from "@testing-library/react-hooks";
import { ASYNC_STATUS, useAsync } from "utils/use-async";

function deferred() {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { resolve, reject, promise };
}

test("call useAsync with intialState", async () => {
  const intialState = { status: ASYNC_STATUS.pending };
  const { result } = renderHook(() => useAsync(intialState));
  expect(result.current).toEqual({
    status: intialState.status,
    run: expect.any(Function),
    error: null,
    data: null,
  });
});

test("call useAsync without initialState", async () => {
  const { result } = renderHook(() => useAsync());
  expect(result.current).toEqual({
    status: ASYNC_STATUS.idle,
    run: expect.any(Function),
    error: null,
    data: null,
  });
});

test("calling run with a promises which resolves", async () => {
  const { resolve, promise } = deferred();
  const { result } = renderHook(() => useAsync());

  let p;
  act(() => {
    p = result.current.run(promise);
  });
  expect(result.current).toEqual({
    status: ASYNC_STATUS.pending,
    run: expect.any(Function),
    error: null,
    data: null,
  });
  const data = "resolved data";
  await act(async () => {
    resolve(data);
    await p;
  });
  expect(result.current).toEqual({
    data,
    status: ASYNC_STATUS.resovled,
    run: expect.any(Function),
    error: null,
  });
});

test("calling run with a promise which rejects", async () => {
  const { promise, reject } = deferred();
  const { result } = renderHook(() => useAsync());

  expect(result.current).toEqual({
    status: ASYNC_STATUS.idle,
    data: null,
    error: null,
    run: expect.any(Function),
  });

  let p;
  act(() => {
    p = result.current.run(promise);
  });
  expect(result.current).toEqual({
    status: ASYNC_STATUS.pending,
    data: null,
    error: null,
    run: expect.any(Function),
  });

  const error = "404 error";
  await act(async () => {
    reject(error);
    await p.catch(() => {
      /* ignore erorr */
    });
  });

  expect(result.current).toEqual({
    status: ASYNC_STATUS.rejected,
    data: null,
    error: error,
    run: expect.any(Function),
  });
});
