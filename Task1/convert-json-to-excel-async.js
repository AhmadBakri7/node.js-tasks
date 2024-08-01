const fs = require("fs").promises;
const xlsx = require("xlsx");

async function convertJsonToExcel() {
  try {
    const data = await fs.readFile("users.json", "utf8"); // read file using await, blocking manner

    // Now convert the string into JSON format
    const jsonFromat = JSON.parse(data);

    // Convert JSON to excel format
    const excelFormat = xlsx.utils.json_to_sheet(jsonFromat);

    // Create a new workbook to add the data (excelFormat)
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, excelFormat, "users2");

    // Write workbook to Excel file
    xlsx.writeFile(workbook, "output_async.xlsx");

    console.log("Excel file created successfully, check it now :)");
  } catch (err) {
    console.error("Error reading file or creating Excel :(");
  }
}

convertJsonToExcel();
