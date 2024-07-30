const fs = require("fs");
const xlsx = require("xlsx"); // for excel files

// read file in non- blocking manner (Async)
fs.readFile("users.json", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file: ", err);
  } else {
    console.log("File content: ", data);
  }

  // Now convert the string into JSON format
  const jsonFromat = JSON.parse(data);

  // Convert JSON to excel format
  const excelFormat = xlsx.utils.json_to_sheet(jsonFromat);

  // Create a new workbook to add the data (excelFormat)
  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, excelFormat, "Users");

  // Write workbook to Excel file
  xlsx.writeFile(workbook, "output.xlsx");

  console.log("Excel file created successfully, check it now :)");
});
