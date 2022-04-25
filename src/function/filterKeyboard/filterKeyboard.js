export default function filterKeyboard(evt, pattern) {
  let regex = new RegExp(pattern);
  let key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
  if (!regex.test(key)) {
    event.preventDefault();
    return false;
  }
}
