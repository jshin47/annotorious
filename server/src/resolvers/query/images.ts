export async function images(_parent, {count, after}, ctx) {
  return await ctx.db.images();
}

export default images
