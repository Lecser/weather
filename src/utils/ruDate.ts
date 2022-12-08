export const ruDate = () =>
  new Date().toLocaleString("ru", {
    month: "long",
    day: "numeric",
    weekday: "long",
  });
