export const delay = (delayAmount: number) =>
  new Promise((resolve) => setTimeout(resolve, delayAmount));
