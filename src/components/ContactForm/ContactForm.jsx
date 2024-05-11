import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required!"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: Date.now(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div className={css.userForm}>
          <label className={css.labelForm} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={css.inputForm} type="text" name="name" />
          <ErrorMessage
            className={css.errMessage}
            name="name"
            component="span"
          />
          <label className={css.labelForm} htmlFor={numberFieldId}>
            Number
          </label>
          <Field className={css.inputForm} type="text" name="number" />
          <ErrorMessage
            className={css.errMessage}
            name="number"
            component="span"
          />
          <button className={css.btnForm} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
