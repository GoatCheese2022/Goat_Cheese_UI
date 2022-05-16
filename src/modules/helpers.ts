export function actionPayload<T = any, M = Record<string, any>>(payload: T, meta?: M) {
  return { payload, meta };
}
