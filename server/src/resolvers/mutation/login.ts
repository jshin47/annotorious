import * as jwt from 'jsonwebtoken'

import {AuthPayloadParent} from "../AuthPayload";
import {UserParent} from "../User";

export async function login(parent, { user, password }: { user: string, password: string }, context, info): Promise<AuthPayloadParent> {

  let identity: UserParent;

  const systemUserLogin = await context.db.systemUserLogin({
    systemUsername: user
  });

  if (systemUserLogin && systemUserLogin.environmentVariable && process.env[systemUserLogin.environmentVariable] && process.env[systemUserLogin.environmentVariable] === password) {
    console.log('should login!')

    identity = systemUserLogin.user;
  }

  if (identity) {
      const token = jwt.sign({ userId: identity.id }, 'abc')
      return {
          user: identity,
          token,
      }
  }

  throw new Error('Invalid user')
}

export default login;
