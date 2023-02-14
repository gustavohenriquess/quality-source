import { describe, expect, it } from "vitest";
import { main } from "./handler";

const event = {
  body: {
    name: "Gustavo",
  },
  headers: {
    Host: "localhost:3000",
    "User-Agent": "insomnia/2022.7.5",
    "Content-Type": "application/json",
    Accept: "*/*",
    "Content-Length": "22",
  },
  httpMethod: "POST",
  isBase64Encoded: false,
  multiValueHeaders: {
    Host: ["localhost:3000"],
    "User-Agent": ["insomnia/2022.7.5"],
    "Content-Type": ["application/json"],
    Accept: ["*/*"],
    "Content-Length": ["22"],
  },
  multiValueQueryStringParameters: null,
  path: "/hello",
  pathParameters: null,
  queryStringParameters: null,
  requestContext: {
    accountId: "offlineContext_accountId",
    apiId: "offlineContext_apiId",
    authorizer: {
      claims: undefined,
      principalId: "offlineContext_authorizer_principalId",
      scopes: undefined,
    },
    domainName: "offlineContext_domainName",
    domainPrefix: "offlineContext_domainPrefix",
    extendedRequestId: "0782d71d-5c9d-4586-a05f-b9963a9b0b41",
    httpMethod: "POST",
    identity: {
      clientCert: {
        clientCertPem: "string",
        serialNumber: "string",
        subjectDN: "string",
        issuerDN: "string",
        validity: {
          notAfter: "string",
          notBefore: "string",
        },
      },
      accessKey: null,
      accountId: "offlineContext_accountId",
      apiKey: "offlineContext_apiKey",
      apiKeyId: "offlineContext_apiKeyId",
      caller: "offlineContext_caller",
      cognitoAuthenticationProvider:
        "offlineContext_cognitoAuthenticationProvider",
      cognitoAuthenticationType: "offlineContext_cognitoAuthenticationType",
      cognitoIdentityId: "offlineContext_cognitoIdentityId",
      cognitoIdentityPoolId: "offlineContext_cognitoIdentityPoolId",
      principalOrgId: null,
      sourceIp: "127.0.0.1",
      user: "offlineContext_user",
      userAgent: "insomnia/2022.7.5",
      userArn: "offlineContext_userArn",
    },
    operationName: undefined,
    path: "/hello",
    protocol: "HTTP/1.1",
    requestId: "8bc84991-e4a5-4c71-9dc2-fa2d27674031",
    requestTime: "13/Feb/2023:22:43:54 -0300",
    requestTimeEpoch: 1676339034769,
    resourceId: "offlineContext_resourceId",
    resourcePath: "/dev/hello",
    stage: "dev",
  },
  resource: "/hello",
  stageVariables: null,
  rawBody: '{\n\t"name": "Gustavo"\n}',
};

describe("hello", () => {
  const resp = main(event, null, null);
  console.log(resp);
});
