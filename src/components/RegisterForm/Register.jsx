import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import styles from "./RegisterForm.module.css"

const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string().min(4, "Too Short!").max(20, "Too Long!").required("Required"),
});

const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const RegisterForm = () => {
    const dispatch = useDispatch();
    
    const nameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();
  
    const handleSubmit = (values, actions) => {
      dispatch(
        register({
          name: values.name,
          email: values.email,
          password: values.password,
        })
      );
      actions.resetForm();
    };
  
    return (
      <div className={styles.formBox}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={styles.form}>
          <div className={styles.formBoxField}>
            <label htmlFor={nameFieldId}>Username</label>
            <Field type="text" name="name" id={nameFieldId} className={styles.formField} />
            <ErrorMessage name="name" component="span" />
          </div>
  
          <div className={styles.formBoxField}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field type="email" name="email" id={emailFieldId} className={styles.formField} />
            <ErrorMessage name="email" component="span" />
          </div>
  
          <div className={styles.formBoxField}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field type="password" name="password" id={passwordFieldId} className={styles.formField} />
            <ErrorMessage name="password" component="span" />
          </div>
          
          <button type="submit" className={styles.formFieldBtn}>Register</button>
        </Form>
      </Formik>
      </div>
    );
  };
  

export default RegisterForm;