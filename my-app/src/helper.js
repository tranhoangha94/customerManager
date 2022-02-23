export function isNotEmpty(value) {
  switch (value) {
    case "":
      return false;
    case {}:
      return false;
    case []:
      return false;
    case null:
      return false;
    case undefined:
      return false;
    default:
      return true;
  }
}
