import { PDFDocument, rgb } from 'pdf-lib';


async function reducePDFSize(inputFile) {
  const pdfBytes = await inputFile.arrayBuffer();
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pages = pdfDoc.getPages();

  // You can perform any optimization techniques here (e.g., reduce image quality, remove unnecessary elements)

  const modifiedPdfBytes = await pdfDoc.save();
//   const modifiedPdfBytes = await pdfDoc.save({ useObjectStreams: false, quality });
  return new Blob([modifiedPdfBytes], { type: 'application/pdf' });
}

export default reducePDFSize;
















// import { PDFDocument } from 'pdf-lib';

// /**
//  * Reduces the size of a PDF file.
//  * @param {File} inputFile - The input PDF file.
//  * @param {number} imageQuality - The desired image quality (optional).
//  * @param {string[]} elementsToRemove - The unnecessary elements to remove (optional).
//  * @returns {Promise<Blob>} - The modified PDF file as a Blob.
//  */
// async function reducePDFSize(inputFile, imageQuality = 0.8, elementsToRemove = []) {
//   try {
//     const pdfBytes = await inputFile.arrayBuffer();
//     const pdfDoc = await PDFDocument.load(pdfBytes);
//     const pages = pdfDoc.getPages();

//     // Perform optimization techniques (e.g., reduce image quality, remove unnecessary elements)
//     // Example:
//     pages.forEach((page) => {
//       // Reduce image quality (adjust as needed)
//       page.getDrawings().forEach((drawing) => {
//         if (drawing.image) {
//           drawing.image.scale(imageQuality);
//         }
//       });

//       // Remove unnecessary elements
//       elementsToRemove.forEach((element) => {
//         page.delete(element);
//       });
//     });

//     const modifiedPdfBytes = await pdfDoc.save();
//     return new Blob([modifiedPdfBytes], { type: 'application/pdf' });
//   } catch (error) {
//     console.error('An error occurred while reducing PDF size:', error);
//     // Handle the error or provide feedback to the user
//     throw error;
//   }
// }

// export default reducePDFSize;
