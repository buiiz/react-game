export const set = (name: string, value: any) => {
  window.localStorage.setItem(name, JSON.stringify(value));
}

export const get = (name: string, subst: any = null) => {
  return JSON.parse(window.localStorage.getItem(name) || subst);
}

export const del = (name: string) => {
  localStorage.removeItem(name);
}
