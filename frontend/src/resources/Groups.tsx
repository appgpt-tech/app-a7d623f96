//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const GroupsTitle = () => {
  const record = useRecordContext();
  return <span>Groups {record ? `"${record.Post}"` : ''}</span>;
};

export const GroupsList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="Post" reference="Post" />
      <BooleanField source="Share" />
      <ReferenceField source="Comment" reference="Comments" />
      <TextField source="Reply" />
      <TextField source="Reacts" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const GroupsEdit = () => (
  <Edit title={<GroupsTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="Post" reference="Post" />
        </Grid>
        <Grid item xs={4}>
          <BooleanInput source="Share" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="Comment" reference="Comments" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Reply" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Reacts" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const GroupsCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="Post" reference="Post" />
        </Grid>
        <Grid item xs={4}>
          <BooleanInput source="Share" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="Comment" reference="Comments" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Reply" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="Reacts" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="Post" label="Post" reference="Post" alwaysOn />,
  ,
  <ReferenceInput
    source="Comment"
    label="Comment"
    reference="Comments"
    alwaysOn
  />,
  ,
  ,
];
