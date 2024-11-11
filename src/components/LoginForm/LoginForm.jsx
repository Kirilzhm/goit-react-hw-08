import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./LoginForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().email("Must be a valid email!").required("Required"),
  password: Yup.string().min(4, "Too Short!").required("Required"),
});

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
        actions.resetForm();
      })
      .catch(() => {
        console.log("login error");
      });
  };

  return (
    <div className={styles.loginBox}>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off" className={styles.form}>
          <div className={styles.formBoxField}>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" className={styles.formField} />
            <ErrorMessage name="email" component="span" />
          </div>

          <div className={styles.formBoxField}>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" className={styles.formField} />
            <ErrorMessage name="password" component="span" />
          </div>

          <button type="submit" disabled={isSubmitting} className={styles.formFieldBtn}>Log In</button>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default LoginForm;
