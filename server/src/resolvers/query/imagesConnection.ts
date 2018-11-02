import { forwardTo } from 'prisma-binding';

export function imagesConnection(_parent, args, ctx, info) {
  return forwardTo('bindings')(_parent, args, ctx, info);
}

export default imagesConnection
