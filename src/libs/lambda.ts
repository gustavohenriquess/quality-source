import middy from "@middy/core";
import middyJsonBodyParser from "@middy/http-json-body-parser";

export const middyfy = (handler) => {
  console.log("hand", handler);
  return middy(handler).use(middyJsonBodyParser());
};
