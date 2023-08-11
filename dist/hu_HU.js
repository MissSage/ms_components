import { n, o as o$1 } from "./_commonjsHelpers.js";
function t(e, r) {
  for (var t2 = 0; t2 < r.length; t2++) {
    const o2 = r[t2];
    if (typeof o2 != "string" && !Array.isArray(o2)) {
      for (const r2 in o2)
        if (r2 !== "default" && !(r2 in e)) {
          const t3 = Object.getOwnPropertyDescriptor(o2, r2);
          t3 && Object.defineProperty(e, r2, t3.get ? t3 : { enumerable: true, get: () => o2[r2] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
var o, a, _, s, d = { exports: {} };
o = d, a = d.exports, _ = function(e, r) {
  Object.defineProperty(r, "__esModule", { value: true }), r.default = { _decimalSeparator: ",", _thousandSeparator: "\xA0", _percentPrefix: null, _percentSuffix: "%", _big_number_suffix_3: "k", _big_number_suffix_6: "M", _big_number_suffix_9: "G", _big_number_suffix_12: "T", _big_number_suffix_15: "P", _big_number_suffix_18: "E", _big_number_suffix_21: "Z", _big_number_suffix_24: "Y", _small_number_suffix_3: "m", _small_number_suffix_6: "\u03BC", _small_number_suffix_9: "n", _small_number_suffix_12: "p", _small_number_suffix_15: "f", _small_number_suffix_18: "a", _small_number_suffix_21: "z", _small_number_suffix_24: "y", _byte_suffix_B: "B", _byte_suffix_KB: "KB", _byte_suffix_MB: "MB", _byte_suffix_GB: "GB", _byte_suffix_TB: "TB", _byte_suffix_PB: "PB", _date_millisecond: "mm:ss SSS", _date_second: "HH:mm:ss", _date_minute: "HH:mm", _date_hour: "HH:mm", _date_day: "MMM dd", _date_week: "ww", _date_month: "MMM", _date_year: "yyyy", _duration_millisecond: "SSS", _duration_millisecond_second: "ss.SSS", _duration_millisecond_minute: "mm:ss SSS", _duration_millisecond_hour: "hh:mm:ss SSS", _duration_millisecond_day: "d'd' mm:ss SSS", _duration_millisecond_week: "d'd' mm:ss SSS", _duration_millisecond_month: "M'm' dd'd' mm:ss SSS", _duration_millisecond_year: "y'y' MM'm' dd'd' mm:ss SSS", _duration_second: "ss", _duration_second_minute: "mm:ss", _duration_second_hour: "hh:mm:ss", _duration_second_day: "d'd' hh:mm:ss", _duration_second_week: "d'd' hh:mm:ss", _duration_second_month: "M'm' dd'd' hh:mm:ss", _duration_second_year: "y'y' MM'm' dd'd' hh:mm:ss", _duration_minute: "mm", _duration_minute_hour: "hh:mm", _duration_minute_day: "d'd' hh:mm", _duration_minute_week: "d'd' hh:mm", _duration_minute_month: "M'm' dd'd' hh:mm", _duration_minute_year: "y'y' MM'm' dd'd' hh:mm", _duration_hour: "hh'h'", _duration_hour_day: "d'd' hh'h'", _duration_hour_week: "d'd' hh'h'", _duration_hour_month: "M'm' dd'd' hh'h'", _duration_hour_year: "y'y' MM'm' dd'd' hh'h'", _duration_day: "d'd'", _duration_day_week: "d'd'", _duration_day_month: "M'm' dd'd'", _duration_day_year: "y'y' MM'm' dd'd'", _duration_week: "w'w'", _duration_week_month: "w'w'", _duration_week_year: "w'w'", _duration_month: "M'm'", _duration_month_year: "y'y' MM'm'", _duration_year: "y'y'", _era_ad: "i. sz.", _era_bc: "i. e.", A: "de.", P: "du.", AM: "de.", PM: "du.", "A.M.": "de.", "P.M.": "du.", January: "janu\xE1r", February: "febru\xE1r", March: "m\xE1rcius", April: "\xE1prilis", May: "m\xE1jus", June: "j\xFAnius", July: "j\xFAlius", August: "augusztus", September: "szeptember", October: "okt\xF3ber", November: "november", December: "december", Jan: "jan.", Feb: "febr.", Mar: "m\xE1rc.", Apr: "\xE1pr.", "May(short)": "m\xE1j.", Jun: "j\xFAn.", Jul: "j\xFAl.", Aug: "aug.", Sep: "szept.", Oct: "okt.", Nov: "nov.", Dec: "dec.", Sunday: "vas\xE1rnap", Monday: "h\xE9tf\u0151", Tuesday: "kedd", Wednesday: "szerda", Thursday: "cs\xFCt\xF6rt\xF6k", Friday: "p\xE9ntek", Saturday: "szombat", Sun: "V", Mon: "H", Tue: "K", Wed: "Sze", Thu: "Cs", Fri: "P", Sat: "Szo", _dateOrd: function(e2) {
    var r2 = "th";
    if (e2 < 11 || e2 > 13)
      switch (e2 % 10) {
        case 1:
          r2 = "st";
          break;
        case 2:
          r2 = "nd";
          break;
        case 3:
          r2 = "rd";
      }
    return r2;
  }, "Zoom Out": "Nagy\xEDt\xE1s/kicsiny\xEDt\xE9s", Play: "Lej\xE1tsz\xE1s", Stop: "Meg\xE1ll\xF3", Legend: "Jelmagyar\xE1zat", "Click, tap or press ENTER to toggle": "", Loading: "Bet\xF6lt\xE9s", Home: "Kezd\u0151lap", Chart: "", "Serial chart": "", "X/Y chart": "", "Pie chart": "", "Gauge chart": "", "Radar chart": "", "Sankey diagram": "", "Flow diagram": "", "Chord diagram": "", "TreeMap chart": "", "Sliced chart": "", Series: "", "Candlestick Series": "", "OHLC Series": "", "Column Series": "", "Line Series": "", "Pie Slice Series": "", "Funnel Series": "", "Pyramid Series": "", "X/Y Series": "", Map: "", "Press ENTER to zoom in": "", "Press ENTER to zoom out": "", "Use arrow keys to zoom in and out": "", "Use plus and minus keys on your keyboard to zoom in and out": "", Export: "Nyomtat\xE1s", Image: "K\xE9p", Data: "Adatok", Print: "Nyomtat\xE1s", "Click, tap or press ENTER to open": "", "Click, tap or press ENTER to print.": "", "Click, tap or press ENTER to export as %1.": "", 'To save the image, right-click this link and choose "Save picture as..."': "", 'To save the image, right-click thumbnail on the left and choose "Save picture as..."': "", "(Press ESC to close this message)": "", "Image Export Complete": "", "Export operation took longer than expected. Something might have gone wrong.": "", "Saved from": "", PNG: "", JPG: "", GIF: "", SVG: "", PDF: "", JSON: "", CSV: "", XLSX: "", "Use TAB to select grip buttons or left and right arrows to change selection": "", "Use left and right arrows to move selection": "", "Use left and right arrows to move left selection": "", "Use left and right arrows to move right selection": "", "Use TAB select grip buttons or up and down arrows to change selection": "", "Use up and down arrows to move selection": "", "Use up and down arrows to move lower selection": "", "Use up and down arrows to move upper selection": "", "From %1 to %2": "Ett\u0151l %1 eddig %2", "From %1": "Ett\u0151l %1", "To %1": "Eddig %1", "No parser available for file: %1": "", "Error parsing file: %1": "", "Unable to load file: %1": "", "Invalid date": "" };
}, (s = _(n, a)) !== void 0 && (o.exports = s);
const i = t({ __proto__: null, default: o$1(d.exports) }, [d.exports]);
export { i as h };
