export const setDataLocal = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getDataLocal = (key: string) => {
  const data = JSON.parse(localStorage.getItem(key) as string) as string;
  return data || null;
};

export const removeDataLocal = (key: string) => {
  localStorage.removeItem(key);
};
