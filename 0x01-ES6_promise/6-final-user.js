// 4-user-promise.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];

  return Promise.allSettled(promises).then((result) => {
    const newres = [];
    for (const re of result) {
      if (re.status === 'fulfilled') {
        newres.push({ status: re.status, value: re.value });
      } else if (re.status === 'rejected') {
        newres.push({ status: re.status, value: re.reason });
      }
    }
    return newres;
  });
}
