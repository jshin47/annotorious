import bcrypt from 'bcryptjs';
import {AuthPayloadParent} from "../AuthPayload";
import {signJwt} from '../../utilities/AuthenticationUtilities';

export async function signup(parent, { emailAddress, password }: { emailAddress: string, password: string }, context, info): Promise<AuthPayloadParent> {

  const user = await context.db.createUser({
    displayName: emailAddress,
    emailAddress,
    localLogin: {
      create: {
        username: emailAddress,
        hashword: await bcrypt.hash(password, 10)
      }}});
  return {
    user,
    token: signJwt({ userId: user.id}),
  };

  throw new Error('Invalid username')
}

export default signup;
