import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import styles from "./ContactForm.module.css"

const validationSchema = Yup.object({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const {name, number} = values;
    if (name && number) {
      dispatch(addContact({ name: values.name, number: values.number }));
      actions.resetForm();
    } else {
      alert('Both fields are required.');
    }
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} 
    validationSchema={validationSchema} 
    onSubmit={handleSubmit}>
      <Form className={styles.formBox}>
        <div className={styles.formSmallBox}>
        <div className={styles.formFieldBox}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" className={styles.formField} />
        <ErrorMessage name="name" component="div" />
        </div>

        <div className={styles.formFieldBox}>
        <label htmlFor="number">Number</label>
        <Field type="tel" name="number" className={styles.formField} />
        <ErrorMessage name="number" component="div" />
        </div>
        </div>

        <div>
        <button type="submit" className={styles.formBtn}>Add Contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
