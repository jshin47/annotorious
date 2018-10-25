import {getUserId} from '../../utilities/AuthenticationUtilities';

export function me(_parent, _args, ctx) {
  const id = getUserId(ctx);
  return ctx.db.user({ id });
}
