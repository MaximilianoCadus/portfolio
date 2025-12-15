const fs = require("fs");
const pdfjsLib = require("pdfjs-dist/legacy/build/pdf.mjs");

async function extractPDFText(pdfPath) {
  try {
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const loadingTask = pdfjsLib.getDocument({ data });
    const pdf = await loadingTask.promise;

    let fullText = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map((item) => item.str).join(" ");
      fullText += pageText + "\n";
    }

    console.log("=== COMPLETE CV CONTENT ===\n");
    console.log(fullText);
    console.log("\n=== END OF CV ===");
  } catch (error) {
    console.error("Error extracting PDF:", error);
  }
}

const pdfPath =
  "c:\\Users\\Maxi\\dev\\portfolio\\public\\Maximiliano Cadús English.pdf";
extractPDFText(pdfPath);
