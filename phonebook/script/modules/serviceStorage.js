/* Storage functions */

export const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

const setStorage = (key, obj) => {
  const localStorageKey = getStorage(key);
  localStorageKey.push(obj);
  localStorage.setItem(key, JSON.stringify(localStorageKey));
};

export const removeStorage = (phone, key) => {
  const localStorageKey = getStorage(key);
  const filteredArray = localStorageKey.filter((item) => item.phone !== phone);

  localStorage.setItem(key, JSON.stringify(filteredArray));
};

export const addContactData = (contact) => {
  setStorage('phonebook-contacts', contact);
};

/* END Storage functions */
