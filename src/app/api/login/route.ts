import { NextApiRequest, NextApiResponse } from "next";

import { v4 } from "uuid";
import { Token } from "./tokens";

export const mockDb = [
  { id: 1, name: "vasya", password: 123, refreshToken: "" },
  { id: 2, name: "masha", password: 1234, refreshToken: "" },
];

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, password } = await (req as any).json();

  // multiple set cookie not working
  let cookie1 = `access-token=${v4()}; path=/; secure; httpOnly; max-age=60;`;
  let cookie2 = `refresh-token=${v4()}; path=/; secure; httpOnly; max-age=60;`;

  let found;

  for (const item of mockDb) {
    if (item.name === name && item.password === +password) {
      found = item;
    }
  }

  if (found) {
    const { id, name } = found;
    const accessToken = new Token({ id, name });
    const refreshToken = new Token({ id, name });

    const accessTokenString = accessToken.signToken("access");
    const refreshTokenString = refreshToken.signToken("refresh");

    found.refreshToken = refreshTokenString;

    return new Response(JSON.stringify(found), {
      status: 200,
      headers: {
        "access-token": accessTokenString,
        "refresh-token": refreshTokenString,
      },
    });
  }
  return new Response("Not found", {
    status: 404,
  });
}
