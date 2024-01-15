import useForm from "./useForm";

const Form = () => {
  const { values, onFormSubmit, handleOnChange, handleInputBlur, hasError } =
    useForm();

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={onFormSubmit}>
        <label>Pet name:</label>
        <input
          type="text"
          name="petName"
          value={values.petName}
          onChange={handleOnChange}
          onBlur={handleInputBlur}
        />
        {hasError && <div>Error!</div>}
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Form;
