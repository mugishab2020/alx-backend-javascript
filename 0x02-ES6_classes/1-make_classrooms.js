import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const num = [19, 20, 34];
  const object = [];

  for (const arr of num) {
    object.push(new ClassRoom(arr));
  }
  return object;
}
