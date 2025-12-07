function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Dashboard de Análise de Volume - BRSP15')
    .addMetaTag('viewport', 'width=1400, initial-scale=0.25, maximum-scale=1.0, user-scalable=yes');
}

// Função para servir arquivos CSS/JS (se necessário)
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}
