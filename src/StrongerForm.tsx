import React from "react";
import { Form as FinalForm } from "react-final-form";
import {
  BestInputField,
  focusOnFirstError,
  BestDropdownField
} from "best-formfields";
import { BestCheckbox } from "best-checkbox";
import FilledInput from "@material-ui/core/FilledInput";

interface Props {}

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export const onSubmit = async (values: any) => {
  await sleep(300);
  window.alert(JSON.stringify(values, undefined, 2));
};

export const StrongerForm = (props: Props) => {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <FinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit }) => {
        return (
          <form
            style={{ display: "flex", flexDirection: "row" }}
            onSubmit={async (
              event: React.FormEvent<HTMLFormElement>
            ): Promise<any> => {
              try {
                await handleSubmit(event);
                focusOnFirstError();
              } catch {
                console.log("ERROR");
              }
            }}
          >
            <div className="set-row" style={{ display: "flex", flex: 1 }}>
              {/* <BestDropdownField
                name={`row-${rowIndex}-dropdown`} // make sure this is unique
                optionData={dropdownDataOptions} // options available when selecting
                isRowRequired={isRowRequired} // when true, this field will be validated (required)
                label={`row-${rowIndex}-dropdown`} // field label - can be whatever and will be displyed when nothing is selected
                width="85%"
              /> */}
              <BestInputField
                name={`input-kg`}
                isRowRequired={isChecked}
                type="number"
                label="Kg"
                variant="filled"
                // width="85%"
              />
              <BestInputField
                name={`input-reps`}
                isRowRequired={isChecked}
                type="number"
                label="Reps"
                variant="filled"
                // width="85%"
              />
              <BestCheckbox
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
                color="Green"
              />
            </div>
          </form>
        );
      }}
    />
  );
};
