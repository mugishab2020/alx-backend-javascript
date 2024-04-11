import {createUser, uploadPhoto} from './utils'

export default function handleProfileSignup() {
    return Promise.all([
        createUser(),
        uploadPhoto()
    ])
   .then(([photo, user]) => {
        console.log(`${photo.body} ${user.firstName} ${user.secondName}`);
   })
   .catch(() => (console.log('Signup system offline')));
}