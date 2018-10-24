import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import {AuthPayloadParent} from "../AuthPayload";

export async function login(parent, { user, password }: { user: string, password: string }, context, info): Promise<AuthPayloadParent> {

  const systemLogins = await context.db.systemLogins({
    where: {
      username: user,
      passwordEnvironmentVariable_in: Object.keys(process.env),
    }
  }).$fragment(`{ passwordEnvironmentVariable  user { id } }`);

  if (systemLogins && systemLogins.length == 1) {
    const systemLogin: any = systemLogins[0];
    const correctPassword = process.env[systemLogin.passwordEnvironmentVariable];
    if (correctPassword && correctPassword === password) {
      const userIdentity = await context.db.user({ id: systemLogin.user.id });
      const token = jwt.sign({ userId: userIdentity.id }, 'abc')
      return {
        user: userIdentity,
        token,
      }
    }
  }

  const localLogins = await context.db.localLogins({ where: { username: user }}).$fragment(`{ hashword  user { id } }`);

  if (localLogins && localLogins.length === 1) {
    const localLogin: any = localLogins[0];
    const correctPassword = await bcrypt.compare(password, localLogin.hashword);
    if (correctPassword) {
      const userIdentity = await context.db.user({ id: localLogin.user.id });
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
