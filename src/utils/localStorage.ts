export const set = (name: string, value: any) => {
  window.localStorage.setItem(name, JSON.stringify(value));
}

export const get = (name: string, substitute: any = null) => {
  return JSON.parse(window.localStorage.getItem(name) || substitute);
}

export const del = (name: string) => {
  localStorage.removeItem(name);
}
