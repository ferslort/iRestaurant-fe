import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config/firebase';

export const uploadFile = async (path: string, id: string, file: any): Promise<any> => {
  try {
    const storageRef = ref(storage, `${path}/${id}.${file.type.split('/')[1]}`);

    const img = await uploadBytes(storageRef, file);
    return (await getDownloadURL(img.ref)) as string as string;
  } catch (error) {
    console.log(error);
  }
};
