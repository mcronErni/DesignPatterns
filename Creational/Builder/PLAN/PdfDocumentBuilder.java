public class PdfDocumentBuilder implements PresentationBuilder {

    private PDFDocument document = new PDFDocument();

    @Override
    public void addSlide(Slide slide) {
        document.addPage(slide.getText());
    }

    public PDFDocument getPdfDocument() {
        return document;
    }

}
