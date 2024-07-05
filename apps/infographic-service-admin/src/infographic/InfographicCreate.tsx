import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const InfographicCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
