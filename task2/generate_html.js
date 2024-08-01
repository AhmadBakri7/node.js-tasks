const fs = require("fs").promises;
const ejs = require("ejs");

async function generateHtml() {
  try {
    // read the JSON file
    const jsnoFormat = await fs.readFile("users.json", "utf8");
    const data = JSON.parse(jsnoFormat); // convert JSON string into JSON object

    // read the ejs file
    const template = await fs.readFile("template.ejs", "utf8");

    // combine the ejs file with the users data (render)
    const htmlContent = ejs.render(template, { data });

    // save the combined ejs with data and generate the output.html
    await fs.writeFile("output.html", htmlContent);

    console.log("HTML file created successfully :)");
  } catch (err) {
    console.error("Error:", err);
  }
}

generateHtml();
