import java.io.FileInputStream
import java.io.FileWriter
import org.apache.poi.ss.usermodel.*
import org.apache.poi.xssf.usermodel.XSSFWorkbook

// Path to the Excel file
String excelFilePath = "D:/TGH_OFFLINE/poc/4545_~~JITUNICIRCUIT~~_XLSX.xlsx"

// Path to the output CSV file
String csvFilePath = "D:/TGH_OFFLINE/poc/output.csv"

// Load the Excel file
FileInputStream excelFile = new FileInputStream(excelFilePath)
Workbook workbook = new XSSFWorkbook(excelFile)

// Get the first sheet from the workbook
Sheet sheet = workbook.getSheetAt(0) // Assuming we are converting the first sheet

// Create a FileWriter to write to the CSV file
FileWriter csvWriter = new FileWriter(csvFilePath)

// Iterate through rows and cells in the sheet
for (Row row : sheet) {
    StringBuilder csvLine = new StringBuilder()

    for (Cell cell : row) {
        String cellValue = ""

        if (cell.getCellType() == CellType.STRING) {
            cellValue = cell.getStringCellValue()
        } else if (cell.getCellType() == CellType.NUMERIC) {
            cellValue = cell.getNumericCellValue().toString()
        } else if (cell.getCellType() == CellType.BOOLEAN) {
            cellValue = cell.getBooleanCellValue().toString()
        } else if (cell.getCellType() == CellType.BLANK) {
            cellValue = ""
        }

        csvLine.append("\"").append(cellValue).append("\",")
    }

    // Remove the trailing comma and write the CSV line
    csvLine.deleteCharAt(csvLine.length() - 1)
    csvWriter.write(csvLine.toString())
    csvWriter.write("\n")
}

// Close the FileWriter and workbook
csvWriter.close()
workbook.close()
