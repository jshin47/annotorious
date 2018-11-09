import {getUserId} from '../../utilities/AuthenticationUtilities';

export async function assignedAnnotationTasks(_parent, {count, after}, ctx) {
  const userId = getUserId(ctx);
  return await ctx.db.annotationTasks({
    where: {
      assignees_some: {
        id: userId,
      }
    }
  });
}

export default assignedAnnotationTasks;
