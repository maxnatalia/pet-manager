import { ChangeEventHandler, FocusEventHandler } from "react";
import { BlockBox, FieldBox, Legend } from "../styled";
import { Input } from "../../../../../common/Input";
import { Label } from "../../../../../common/Label";
import { ErrorFieldMsg } from "../../../../../common/ErrorFieldMsg";

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
          <ErrorFieldMsg>
            Error! Pet name is requiered! You must enter at least three
            characters.
          </ErrorFieldMsg>
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
          <ErrorFieldMsg>
            Error! Breed is requiered! You must enter at least three characters.
          </ErrorFieldMsg>
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
          <ErrorFieldMsg>
            Error! Date of birth is requiered! Date of birth must be before or
            equal today.
          </ErrorFieldMsg>
        )}
      </FieldBox>
      <Legend>* - fields required</Legend>
    </BlockBox>
  );
};

export default BasicDataForm;
