import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contact = ({ contact: { id, name, number }, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <li className={css.contactItem}>
      <div className={css.contactWrapper}>
        <p className={css.userInit}>
          <IoPerson className={css.userIcon} size="24" />
          {name}
        </p>
        <p className={css.userInit}>
          <BsFillTelephoneFill className={css.userIcon} size="24" />
          {number}
        </p>
      </div>
      <button className={css.btnItem} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
