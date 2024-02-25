export default function () {
  if ('ontouchstart' in document.documentElement) {
    for (var sheetI = document.styleSheets.length - 1; sheetI >= 0; sheetI--) {
      var sheet = document.styleSheets[sheetI]
      if (sheet.cssRules) {
        for (var ruleI = sheet.cssRules.length - 1; ruleI >= 0; ruleI--) {
          var rule = sheet.cssRules[ruleI]

          if (rule.selectorText) {
            rule.selectorText = rule.selectorText.replace(':hover', ':active')
          }
        }
      }
    }
  }
}
