import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const InfographicEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <NumberInput
          step={1}
          label="numberOfDownloads"
          source="numberOfDownloads"
        />
        <TextInput label="tag" source="tag" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
