import { ImageParent } from '../Image';

async function processUpload(upload) {
  const { stream, filename, mimetype, encoding } = await upload;
  console.log(stream, filename, mimetype, encoding);
}

export async function importImages(obj, { files }): Promise<ImageParent> {
  await Promise.all(files.map(processUpload));
  return null;
}

export default importImages;
