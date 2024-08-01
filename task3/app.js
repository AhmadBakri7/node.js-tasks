const nodemailer = require("nodemailer");
const fs = require("fs").promises;
const path = require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rbakri9@gmail.com",
    pass: "lxqo tmqj fmen dalh",
  },
});

async function sendEmail() {
  try {
    // Load Excel file
    const excelFilePath = path.join(__dirname, "output_async.xlsx");
    const excelFileContent = await fs.readFile(excelFilePath);

    // Load the HTML content
    const htmlFilePath = path.join(__dirname, "output.html");
    const htmlContent = await fs.readFile(htmlFilePath, "utf8");

    // Set up email data
    const mailOptions = {
      from: "rbakri9@gmail.com", // sender address
      to: "rbakri9@gmail.com", // list of receivers
      subject: "The excel and html", // Subject line
      html: htmlContent, // html body
      attachments: [
        {
          filename: "output_async.xlsx",
          content: excelFileContent,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

sendEmail();
