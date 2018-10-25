import bcrypt from 'bcryptjs';
import {AuthPayloadParent} from "../AuthPayload";
import {signJwt} from '../../utilities/AuthenticationUtilities';

export async function createUser(parent, { username, password }: { username: string, password: string }, context, info): Promise<AuthPayloadParent> {

  const user = await context.db.createUser({
    displayName: username,
    localLogin: {
      create: {
        username,
        hashword: await bcrypt.hash(password, 10)
      }}});
  return {
    user,
    token: signJwt({ userId: user.id}),
  };

  throw new Error('Invalid username')
}

export default createUser;
