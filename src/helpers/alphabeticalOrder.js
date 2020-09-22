export function alphabeticalOrder(data) {
  const response = data.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  return response;
}