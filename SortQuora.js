var potentiallyAnswers = $('.pagedlist_item');

var answersDivs = [];

for (var i = 0; i < potentiallyAnswers.length; i++) {
	var answer = $('#' + potentiallyAnswers[i].id).find('.AnswerBase');

	if (answer.length > 0) {
		answersDivs.push(potentiallyAnswers[i])
	}
}

var data = []

for (var i = 0; i < answersDivs.length; i++) {
	var countDiv = $('#' + answersDivs[i].id).find('.answer_upvote');

	var count = $(countDiv[0].children[1])[0]

	var countValue = $(count).html();

	data.push({ valor: Number(countValue), indice: i});
}

data.sort(function(a, b) {
  return b.valor - a.valor;
});

var mainContainer = $('.AnswerPagedList');

mainContainer.empty();

for (var i = 0; i < data.length; i++) {
	mainContainer.append(answersDivs[data[i].indice]);
}
