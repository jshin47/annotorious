import {getUserId} from '../../utilities/AuthenticationUtilities';

export async function me(_parent, _args, ctx) {
  const id = getUserId(ctx);
  return await ctx.db.user({ id });
}

export default me
