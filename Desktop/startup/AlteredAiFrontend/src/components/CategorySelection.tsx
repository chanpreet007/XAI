import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["Chest-X-Ray","Others"];
const subCategoriesOptions = ["Pneumonia", "TuberClusosis","Normal", "Others"];

export default function CategorySelection(props: { handleCategory: any; handleSubCategory: any; }) {

  //category
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  //subcategory
  const [subCategoryValue, setSubCategoryValue] = React.useState<string | null>(
    subCategoriesOptions[0]
  );
  const [subInputValue, setSubInputValue] = React.useState("");

  const { handleCategory, handleSubCategory} = props;

  React.useEffect(() => {
    handleCategory(options[0])
    handleSubCategory(subCategoriesOptions[0])
  })
  
  React.useEffect(() => {
    handleCategory(value)
    handleSubCategory(subCategoryValue)
  },[value,subCategoryValue])
  

  return (
    <div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: string | null) => {
          handleCategory(newValue)  
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Category" />}
      />
      <br />
      <Autocomplete
        value={subCategoryValue}
        onChange={(event: any, newValue: string | null) => {
          handleSubCategory(newValue) 
          setSubCategoryValue(newValue);
        }}
        inputValue={subInputValue}
        onInputChange={(event, newInputValue) => {
          setSubInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={subCategoriesOptions}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Sub-category" />}
      />
    </div>
  );
}
