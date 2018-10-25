import {getUserId} from '../../utilities/AuthenticationUtilities';
import {AnnotationParent} from '../Annotation';

export default async function(parent, args, context): Promise<AnnotationParent>{
  const userId = getUserId(context);

  const { subjectId, data, taskId } = args.data;
  console.log(args.data);
  console.log(userId);

  const annotation = await context.db.createAnnotation({
    data,
    task: {
      connect: {
        id: taskId
      }
    },
    annotator: {
      connect: {
        id: userId
      }
    },
    subject: {
      connect: {
        id: subjectId
      }
    }
  });

  return annotation;

}
