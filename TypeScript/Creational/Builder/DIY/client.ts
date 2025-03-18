// ReportBuilder.ts
interface ReportBuilder {
    addTable(tableName: string, table: Table): void;
}

// Table.ts
class Table {
    private tableName: string;
    private columns: string[] = [];

    constructor(tableName: string) {
        this.tableName = tableName;
    }

    getTableName(): string {
        return this.tableName;
    }

    addColumn(col: string): void {
        this.columns.push(col);
    }
}

// Report.ts
class Report {
    private tables: Table[] = [];

    addTable(table: Table): void {
        this.tables.push(table);
    }

    export(builder: ReportBuilder): void {
        for (const table of this.tables) {
            builder.addTable(table.getTableName(), table);
        }
    }
}

// ExcelDocument.ts
class ExcelDocument {
    addData(tableName: string, table: Table): void {
        console.log("Adding Data to the Excel file");
    }
}

// ExcelBuilder.ts
class ExcelBuilder implements ReportBuilder {
    private document: ExcelDocument = new ExcelDocument();

    addTable(tableName: string, table: Table): void {
        this.document.addData(tableName, table);
    }

    getExcelDocument(): ExcelDocument {
        return this.document;
    }
}

// PdfDocument.ts
class PdfDocument {
    addPage(text: string, table: Table): void {
        console.log("Adding page to PDF");
    }
}

// PdfBuilder.ts
class PdfBuilder implements ReportBuilder {
    private document: PdfDocument = new PdfDocument();

    addTable(tableName: string, table: Table): void {
        this.document.addPage(tableName, table);
    }

    getPdfDocument(): PdfDocument {
        return this.document;
    }
}

// Main.ts
class Main {
    public static main(): void {
        const report = new Report();

        const table1 = new Table("Country Population");
        table1.addColumn("Philippines");

        report.addTable(table1);

        const excelReportBuilder = new ExcelBuilder();
        report.export(excelReportBuilder);
        const excel = excelReportBuilder.getExcelDocument();

        const pdfReportBuilder = new PdfBuilder();
        report.export(pdfReportBuilder);
        const pdf = pdfReportBuilder.getPdfDocument();
    }
}

// Run the main method
Main.main();