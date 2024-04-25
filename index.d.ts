type IObj<S, T = string> = {
  [K in `${Extract<S, string>}`]: T;
};
type IJsonParseDetailErrorDjango<T = string, S = string> = IObj<S, IObj<T>>;

export declare function jsonParseErrorDetailDjango<T = 'code' | 'string' | string, S = string>(
  errorDetail: string,
  keyString: T,
  keyCode: T
): IJsonParseDetailErrorDjango<T, S>;
