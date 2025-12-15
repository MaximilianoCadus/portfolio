const fs = require("fs");
const { PDFParse } = require("pdf-parse");

const pdfPath =
  "c:\\Users\\Maxi\\dev\\portfolio\\public\\Maximiliano Cadús English.pdf";

fs.readFile(pdfPath, async (err, dataBuffer) => {
  if (err) {
    console.error("Error reading PDF file:", err);
    return;
  }

  try {
    const parser = new PDFParse();
    const data = await parser.parse(dataBuffer);
    console.log("=== COMPLETE CV CONTENT ===\n");
    console.log(data.text);
    console.log("\n=== END OF CV ===");
  } catch (error) {
    console.error("Error parsing PDF:", error);
  }
});
