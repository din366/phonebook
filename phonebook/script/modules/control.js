import {getStorage, removeStorage, addContactData} from './serviceStorage.js';
import createElements from './createElements.js';
const {createRow} = createElements;

export const hoverRow = (allRow, logo) => {
  const text = logo.textContent;
  allRow.forEach((contact) => {
    contact.addEventListener('mouseenter', () => {
      logo.textContent = contact.phoneLink.textContent;
    });
    contact.addEventListener('mouseleave', () => {
      logo.textContent = text;
    });
  });
};

export const modalControl = (btnAdd, formOverlay) => {
  const openModal = () => {
    formOverlay.classList.add('is-visible');
  };

  const closeModal = () => {
    formOverlay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', () => {
    openModal();
  });

  formOverlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === formOverlay || target.classList.contains('close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

export const deleteControl = (btnDel, list) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach((del) => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.del-icon')) {
      const phoneNumberContacts = target
        .closest('.contact')
        .querySelectorAll('td')[3].firstChild.textContent;
      removeStorage(phoneNumberContacts, 'phonebook-contacts');
      target.closest('.contact').remove();
    }
  });
};

export const sortedContacts = (sortedForItem) => {
  const cellIntex = sortedForItem.cellIndex;
  const table = document.querySelector('.table');

  const sortedRows = Array.from(table.rows)
    .slice(1)
    .sort((rowA, rowB) => {
      if (rowA.cells[cellIntex].innerHTML > rowB.cells[cellIntex].innerHTML) {
        return 1;
      } else {
        return -1;
      }
    });

  /* Sorted Items in localStorage */
  const currentLocalStorage = getStorage('phonebook-contacts');
  const sortedlocalStorage = [];
  for (const itemTable of sortedRows) {
    const itemTablePhoneNumber = itemTable.children[3].firstChild.textContent;

    sortedlocalStorage.push(
      currentLocalStorage.find((item) => item.phone === itemTablePhoneNumber),
    );
  }

  localStorage.setItem(
    'phonebook-contacts',
    JSON.stringify(sortedlocalStorage),
  );

  /* END Sorted Items in localStorage */

  table.tBodies[0].append(...sortedRows);
};

const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

export const formControl = (form, list, closeModal) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newContact = Object.fromEntries(formData);

    newContact.phone = '+' + newContact.phone;
    console.log(newContact);
    addContactPage(newContact, list);
    addContactData(newContact);
    form.reset();
    closeModal();
  });
};
