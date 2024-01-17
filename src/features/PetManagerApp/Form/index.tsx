import usePetsContext from "../usePetsContext";
import { petCategory } from "../utils";
import useFormField from "./useFormField";

const Form = () => {
  const { editableId } = usePetsContext();
  const {
    onFormSubmit,
    petName,
    petNameBlurHandler,
    petNameChangedHandler,
    petNameHasError,
    breed,
    breedBlurHandler,
    breedChangedHandler,
    breedHasError,
    categoryChangedHandler,
    category,
    gender,
    genderChangedHandler,
    description,
    descriptionChangedHandler,
    dateOfBirth,
    dateOfBirthBlurHandler,
    dateOfBirthChangedHandler,
    dateOfBirthHasError,
  } = useFormField();

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={onFormSubmit}>
        <div>
          <label>Pet name:*</label>
          <input
            type="text"
            name="petName"
            value={petName}
            onChange={petNameChangedHandler}
            onBlur={petNameBlurHandler}
          />
          {petNameHasError && <div>Error!</div>}
        </div>

        <div>
          <label>Pet breed:*</label>
          <input
            type="text"
            name="breed"
            value={breed}
            onChange={breedChangedHandler}
            onBlur={breedBlurHandler}
          />
          {breedHasError && <div>Error!</div>}
        </div>

        <div>
          <label>Date of Birth:*</label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={dateOfBirthChangedHandler}
            onBlur={dateOfBirthBlurHandler}
          />
          {dateOfBirthHasError && <div>Error!</div>}
        </div>
        <div>
          <label>Pet category:</label>
          <select onChange={categoryChangedHandler} value={category}>
            {petCategory.map((category, index) => (
              <option
                key={`${index} - ${category.value}`}
                value={category.value}
              >
                {category.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="male"
              name="gender"
              checked={gender === "male"}
              onChange={genderChangedHandler}
            />
            <span>MALE</span>
          </label>
          <label>
            <input
              type="radio"
              value="female"
              name="gender"
              checked={gender === "female"}
              onChange={genderChangedHandler}
            />
            <span>FEMALE</span>
          </label>
          <label>
            <input
              type="radio"
              value="unspecified"
              name="gender"
              checked={gender === "unspecified"}
              onChange={genderChangedHandler}
            />
            <span>UNSPECIFIED</span>
          </label>
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={description}
            onChange={descriptionChangedHandler}
          />
        </div>
        <button type="submit">
          {editableId ? "Save changes" : "Add new Pet"}
        </button>
      </form>
    </div>
  );
};

export default Form;
