var ConstructorTest = {

	ancestor: document.body,
	wrapper:'',
	form:'',
	header:'',
	questionBlock:'',
	answerBlock:'',
	label:'',
	checkbox:'',
	submit:'',

	createWrapper: function() {
		this.wrapper = document.createElement('div');
		this.wrapper.classList.add('wrapper');
		this.ancestor.appendChild(this.wrapper);
	},

	createForm: function() {
		this.form = document.createElement('form');
		this.form.classList.add('test_form');
		this.wrapper.appendChild(this.form);
	},

	createHeader: function() {
		this.header = document.createElement('h1');
		this.header.classList.add('header');
		this.header.innerHTML = 'Тест по программированию.';
		this.form.appendChild(this.header);
	},

	createQuestionBlock: function(numQuestions) {
		var questionKeys = Object.keys(questions);
		for (var i = 0; i < numQuestions; i++) {
			this.questionBlock = document.createElement('ul');
			this.questionBlock.classList.add('question_block');
			this.questionBlock.innerHTML = (i+1)+'. '+questionKeys[i];
			this.createAnswerBlock(questionKeys[i]);
			this.form.appendChild(this.questionBlock);
		}
	},

	createAnswerBlock: function(key) {
		for (var i = 0; i < questions[key].length; i++) {
			this.answerBlock = document.createElement('li');
			this.answerBlock.classList.add('li_answer');
			this.createLabel(questions[key][i])
			this.answerBlock.appendChild(this.label);
			this.questionBlock.appendChild(this.answerBlock);
		}
	},

	createLabel: function(ansewr) {
		this.label = document.createElement('label');
		this.label.classList.add('label_answer');
		this.createCheckbox();
		this.label.appendChild(this.checkbox);
		var oldHTML = this.label.innerHTML;
		this.label.innerHTML = oldHTML + ansewr;
	},

	createCheckbox: function() {
		this.checkbox = document.createElement('input');
		this.checkbox.setAttribute('type', 'checkbox');
		this.checkbox.classList.add('checkbox_answer');
	},

	createSubmit: function() {
		this.submit = document.createElement('input');
		this.submit.setAttribute('type', 'submit');
		this.submit.setAttribute('value', 'Проверить мои результаты')
		this.form.appendChild(this.submit);
	},

	createTest: function(numQuestions) {
		this.createWrapper();
		this.createForm();
		this.createHeader();
		this.createQuestionBlock(numQuestions);
		this.createSubmit();
	}
}