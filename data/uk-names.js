// Ukrainian place names, derived from the Russian spelling of transliterated Hebrew names, with fixed forms where the rule does not fit.
const FIX = {
  'Иерусалим': 'Єрусалим', 'Тель-Авив': 'Тель-Авів', 'Тель-Авив — Яффо': 'Тель-Авів — Яффо', 'Хайфа': 'Хайфа', 'Назарет': 'Назарет',
  'Беэр-Шева': 'Беер-Шева', 'Модиин-Маккабим-Реут': 'Модіїн-Маккабім-Реут', 'Модиин': 'Модіїн', 'Кейсария': 'Кесарія', 'Акко': 'Акко',
  'Тверия': 'Тверія', 'Цфат': 'Цфат', 'Эйлат': 'Ейлат', 'Яффо': 'Яффо',
};
function ukFromRu(s) {
  if (!s) return s;
  if (FIX[s]) return FIX[s];
  let t = s;
  t = t.replace(/ь([яюеёи])/g, (m, v) => "'" + ({ 'я': 'я', 'ю': 'ю', 'е': 'є', 'ё': 'йо', 'и': 'ї' })[v]);
  t = t.replace(/ии/g, 'ії').replace(/ИИ/g, 'ІІ');
  t = t.replace(/и/g, 'і').replace(/И/g, 'І');
  t = t.replace(/ы/g, 'и').replace(/Ы/g, 'И');
  t = t.replace(/э/g, 'е').replace(/Э/g, 'Е');
  t = t.replace(/ё/g, 'ьо').replace(/ъ/g, "'");
  t = t.replace(/([аеоуіюяєїАЕОУІ])і/g, '$1ї');
  return t;
}
module.exports = { ukFromRu };
