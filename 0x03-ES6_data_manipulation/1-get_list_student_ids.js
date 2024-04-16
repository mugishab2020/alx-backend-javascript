export default function getListStudentIds(myarray) {
  let mylist = [];
  if (Array.isArray(myarray)) {
    mylist = myarray.map((a) => a.id);
  }
  return mylist;
}
