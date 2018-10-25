import {AnnotationTaskParent} from '../AnnotationTask';
import {getUserId} from '../../utilities/AuthenticationUtilities';

export default async function(parent, args, context): Promise<AnnotationTaskParent>{
  getUserId(context);

  const data = args.data;
  const { assignees, subjects, requirements } = data;

  const connectedSubjects = subjects.filter(s => s.id).map(s => s.id);

  const createdSubjects = await Promise.all(subjects.filter(s => s.imageUri)
    .map(async s => {
      const ensuredImage = await context.db.upsertImage({
        where: {
          uri: s.imageUri
        },
        create: {
          uri: s.imageUri
        },
        update: {}
      });
      console.log(ensuredImage);
      return ensuredImage.id;
    })
    .map(async id => ({
    image: {
      connect: {
        id: await id
      }
    }
  })));

  console.log(createdSubjects[0]);

  const task = await context.db.createAnnotationTask({
    assignees: {
      connect: assignees.map(assigneeUserId => ({
        id: assigneeUserId
      }))
    },
    displayName: 'Test',
    requirements,
    subjects: {
      connect: connectedSubjects,
      create: createdSubjects,
    },
  });

  return task;
}
