import { FaWpforms } from "react-icons/fa";
import TitlePage from "../../../../common/TitlePage";
import usePetsContext from "../../usePetsContext";
import useFormField from "./useFormField";
import AddicionalDataForm from "./AddicionalDataForm";
import BasicDataForm from "./BasicDataForm";
import { Button, ButtonsBox, FormBox } from "./styled";

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
    dateOfBirth,
    dateOfBirthBlurHandler,
    dateOfBirthChangedHandler,
    dateOfBirthHasError,
    categoryChangedHandler,
    category,
    gender,
    genderChangedHandler,
    description,
    descriptionChangedHandler,
    handleCancelForm,
  } = useFormField();

  return (
    <>
      <TitlePage
        title={`${editableId === "" ? "Form" : "Editing Form"}`}
        subtitle="Here you can add your new pet to the list"
        icon={<FaWpforms />}
      />
      <FormBox onSubmit={onFormSubmit}>
        <BasicDataForm
          petName={petName}
          petNameBlurHandler={petNameBlurHandler}
          petNameChangedHandler={petNameChangedHandler}
          petNameHasError={petNameHasError}
          breed={breed}
          breedBlurHandler={breedBlurHandler}
          breedChangedHandler={breedChangedHandler}
          breedHasError={breedHasError}
          dateOfBirth={dateOfBirth}
          dateOfBirthBlurHandler={dateOfBirthBlurHandler}
          dateOfBirthChangedHandler={dateOfBirthChangedHandler}
          dateOfBirthHasError={dateOfBirthHasError}
        />
        <AddicionalDataForm
          categoryChangedHandler={categoryChangedHandler}
          category={category}
          gender={gender}
          genderChangedHandler={genderChangedHandler}
          description={description}
          descriptionChangedHandler={descriptionChangedHandler}
        />
        <ButtonsBox>
          <Button type="submit">
            {editableId ? "Save changes" : "Add new Pet"}
          </Button>
          <Button type="button" onClick={handleCancelForm}>
            Cancel
          </Button>
        </ButtonsBox>
      </FormBox>
    </>
  );
};

export default Form;
