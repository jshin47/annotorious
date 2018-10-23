import * as jwt from 'jsonwebtoken'

import {AuthPayloadParent} from "../AuthPayload";

export async function login(parent, { user, password }: { user: string, password: string }, context, info): Promise<AuthPayloadParent> {

  const systemUserLogins = await context.db.systemUserLogins({
    where: {
      systemUsername: user,
      environmentVariable_in: Object.keys(process.env),
    }
  }).$fragment(`{ environmentVariable  user { id } }`);

  if (systemUserLogins && systemUserLogins.length == 1) {
    const systemUserLogin: any = systemUserLogins[0];
    const correctPassword = process.env[systemUserLogin.environmentVariable];
    if (correctPassword && correctPassword === password) {
      const userIdentity = await context.db.user({ id: systemUserLogin.user.id });
      const token = jwt.sign({ userId: userIdentity.id }, 'abc')
      return {
        user: userIdentity,
        token,
      }
    }
  }

  throw new Error('Invalid user')
}

export default login;
