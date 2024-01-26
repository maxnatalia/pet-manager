import { ChangeEventHandler } from "react";
import { petCategoryOptions } from "../../../utils";
import { BlockBox, CustomRadio, FieldBox, Input, Label } from "../styled";

type AdditionalDataFormProps = {
  categoryChangedHandler: ChangeEventHandler<HTMLSelectElement>;
  category: string;
  gender: string;
  genderChangedHandler: ChangeEventHandler<HTMLInputElement>;
  description: string;
  descriptionChangedHandler: ChangeEventHandler<HTMLTextAreaElement>;
};

const AddicionalDataForm = ({
  categoryChangedHandler,
  category,
  gender,
  genderChangedHandler,
  description,
  descriptionChangedHandler,
}: AdditionalDataFormProps) => {
  return (
    <BlockBox $position="additional">
      <FieldBox>
        <Label>Pet category:</Label>
        <Input as={"select"} onChange={categoryChangedHandler} value={category}>
          {petCategoryOptions.map((category, index) => (
            <option key={`${index} - ${category.value}`} value={category.value}>
              {category.label}
            </option>
          ))}
        </Input>
      </FieldBox>
      <FieldBox $horizontal>
        <Label $horizontal>
          <CustomRadio
            type="radio"
            value="male"
            name="gender"
            checked={gender === "male"}
            onChange={genderChangedHandler}
          />
          <span>MALE</span>
        </Label>
        <Label $horizontal>
          <CustomRadio
            type="radio"
            value="female"
            name="gender"
            checked={gender === "female"}
            onChange={genderChangedHandler}
          />
          <span>FEMALE</span>
        </Label>
        <Label $horizontal>
          <CustomRadio
            type="radio"
            value="unspecified"
            name="gender"
            checked={gender === "unspecified"}
            onChange={genderChangedHandler}
          />
          <span>UNSPECIFIED</span>
        </Label>
      </FieldBox>
      <FieldBox>
        <Label>Description:</Label>
        <Input
          as={"textarea"}
          name="description"
          value={description}
          onChange={descriptionChangedHandler}
        />
      </FieldBox>
    </BlockBox>
  );
};

export default AddicionalDataForm;
