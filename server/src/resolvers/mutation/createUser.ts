// import * as jwt from 'jsonwebtoken'
// import bcrypt from 'bcryptjs';
// import {AuthPayloadParent} from "../AuthPayload";
//
// export async function createUser(parent, { username, password }: { user: string, password: string }, context, info): Promise<AuthPayloadParent> {
//
//   const systemUserLogins = await context.db.systemUserLogins({
//     where: {
//       systemUsername: user,
//       environmentVariable_in: Object.keys(process.env),
//     }
//   }).$fragment(`{ environmentVariable  user { id } }`);
//
//   if (systemUserLogins && systemUserLogins.length == 1) {
//     const systemUserLogin: any = systemUserLogins[0];
//     const correctPassword = process.env[systemUserLogin.environmentVariable];
//     if (correctPassword && correctPassword === password) {
//       const userIdentity = await context.db.user({ id: systemUserLogin.user.id });
//       const token = jwt.sign({ userId: userIdentity.id }, 'abc')
//       return {
//         user: userIdentity,
//         token,
//       }
//     }
//   }
//
//   const localUserLogins = await context.db.localUserLogins({ where: { username: user }}).$fragment(`{ hashword  user { id } }`);
//
//   if (localUserLogins && localUserLogins.length === 1) {
//     const localUserLogin: any = localUserLogins[0];
//     const correctPassword = await bcrypt.compare(password, localUserLogin.hashword);
//     if (correctPassword) {
//       const userIdentity = await context.db.user({ id: localUserLogin.user.id });
//       const token = jwt.sign({ userId: userIdentity.id }, 'abc')
//       return {
//         user: userIdentity,
//         token,
//       }
//     }
//   }
//
//   throw new Error('Invalid user')
// }
//
// export default login;
