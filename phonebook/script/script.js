import {getStorage} from './modules/serviceStorage.js';
import * as render from './modules/render.js';
const {renderPhoneBook, renderContacts} = render;
import {
  hoverRow,
  modalControl,
  deleteControl,
  formControl,
  sortedContacts,
} from './modules/control.js';

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {list, logo, btnAdd, btnDel, formOverlay, form} = renderPhoneBook(
      app,
      title,
    );
    // Функционал

    const allRow = renderContacts(list, getStorage('phonebook-contacts'));
    const {closeModal} = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);

    /* Sort function by first name or last name   */
    document.querySelector('thead').addEventListener('click', (e) => {
      const target = e.target;
      if (target.cellIndex === 1 || target.cellIndex === 2) {
        sortedContacts(target);
      }
    });
  };

  window.phoneBookInit = init;
}
