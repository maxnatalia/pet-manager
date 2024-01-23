import { ChangeEventHandler, FocusEventHandler } from "react";
import { BlockBox, ErrorMsg, FieldBox, Input, Label, Legend } from "../styled";

type BasicDataFormProps = {
  petName: string;
  petNameBlurHandler: FocusEventHandler<HTMLInputElement>;
  petNameChangedHandler: React.ChangeEventHandler<HTMLInputElement>;
  petNameHasError: boolean;
  breed: string;
  breedBlurHandler: FocusEventHandler<HTMLInputElement>;
  breedChangedHandler: ChangeEventHandler<HTMLInputElement>;
  breedHasError: boolean;
  dateOfBirth: string;
  dateOfBirthBlurHandler: FocusEventHandler<HTMLInputElement>;
  dateOfBirthChangedHandler: ChangeEventHandler<HTMLInputElement>;
  dateOfBirthHasError: boolean;
};

const BasicDataForm = ({
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
}: BasicDataFormProps) => {
  return (
    <BlockBox $position="basic">
      <FieldBox>
        <Label $error={petNameHasError}>Pet name:*</Label>
        <Input
          $error={petNameHasError}
          type="text"
          name="petName"
          value={petName}
          onChange={petNameChangedHandler}
          onBlur={petNameBlurHandler}
        />
        {petNameHasError && (
          <ErrorMsg>
            Error! Pet name is requiered! You must enter at least three
            characters.
          </ErrorMsg>
        )}
      </FieldBox>
      <FieldBox>
        <Label $error={breedHasError}>Pet breed:*</Label>
        <Input
          $error={breedHasError}
          type="text"
          name="breed"
          value={breed}
          onChange={breedChangedHandler}
          onBlur={breedBlurHandler}
        />
        {breedHasError && (
          <ErrorMsg>
            Error! Breed is requiered! You must enter at least three characters.
          </ErrorMsg>
        )}
      </FieldBox>
      <FieldBox>
        <Label $error={dateOfBirthHasError}>Date of Birth:*</Label>
        <Input
          $error={dateOfBirthHasError}
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={dateOfBirthChangedHandler}
          onBlur={dateOfBirthBlurHandler}
        />
        {dateOfBirthHasError && (
          <ErrorMsg>
            Error! Date of birth is requiered! Date of birth must be before or
            equal today.
          </ErrorMsg>
        )}
      </FieldBox>
      <Legend>* - fields required</Legend>
    </BlockBox>
  );
};

export default BasicDataForm;
