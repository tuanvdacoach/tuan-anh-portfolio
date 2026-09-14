/**
 * Nhận dữ liệu form liên hệ từ portfolio và ghi vào Google Sheet.
 * Cách dùng:
 * 1. Mở Google Sheet dùng để lưu dữ liệu > Extensions > Apps Script.
 * 2. Dán toàn bộ nội dung file này vào, Save.
 * 3. Deploy > New deployment > Web app > Execute as: Me > Who has access: Anyone.
 * 4. Copy link .../exec, dán vào biến APPS_SCRIPT_URL trong index.html.
 */
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = e.parameter;

  // Honeypot: nếu field ẩn "website" có giá trị, đây là bot -> bỏ qua, không ghi
  if (data.website) {
    return ContentService.createTextOutput(JSON.stringify({ result: 'ignored' }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    new Date(),
    data.hoTen || '',
    data.donVi || '',
    data.chucVu || '',
    data.email || '',
    data.sdt || '',
    data.viTri || '',
    data.loiNhan || ''
  ]);

  return ContentService.createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
