/* -- FUNCTIONS -- */

var getAnswersDivs = function(classContainer, individualClassContainer) {
    var potentiallyAnswers = $(classContainer);

    var answersDivs = [];

    for (var i = 0; i < potentiallyAnswers.length; i++) {
        var answer = $('#' + potentiallyAnswers[i].id).find(individualClassContainer);

        if (answer.length > 0) answersDivs.push(potentiallyAnswers[i]);
    }

    return answersDivs;
};

var getNumberOfUpvotesPerAnswer = function(answersDivs) {

    var getNumberOfUpvotesFromString = function (text) {
        if (text.indexOf("k") !== -1) {
            return 1000 * Number(text.replace("k", ""));
        } else if (text.indexOf("m") !== -1) {
            return 1000000 * Number(text.replace("m", ""));
        } else {
            return Number(text);
        }
    };

    var data = [];

    for (var i = 0; i < answersDivs.length; i++) {
        var countDiv = $('#' + answersDivs[i].id).find('.answer_upvote');

        var count = $(countDiv[0].children[1])[0];

        data.push({ valor: getNumberOfUpvotesFromString($(count).html()), indice: i});
    }

    data.sort(function(a, b) {
        return b.valor - a.valor;
    });

    return data;
};

var updateQuoraPage = function(data, mainContainerClass, answersDivs) {
    var mainContainer = $(mainContainerClass);

    mainContainer.empty();

    for (var i = 0; i < data.length; i++) {
        mainContainer.append(answersDivs[data[i].indice]);
    }
};

/* -- MAIN -- */

var answersDivs = getAnswersDivs('.pagedlist_item', '.AnswerBase');

var data = getNumberOfUpvotesPerAnswer(answersDivs);

updateQuoraPage(data, '.AnswerPagedList', answersDivs);





