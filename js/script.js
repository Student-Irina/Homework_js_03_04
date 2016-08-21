

var test = {

	create_element : function() {
		var element_p = document.createElement('p');
		
		element_p.innerHTML = 'Тест по программированию';
		
		var form = document.createElement('form');
		
		form.classList.add('form-test');
		form.method = 'post';
		form.action = '/';
        
        var body = document.getElementsByTagName('body');
        
		document.body.appendChild(element_p);
		document.body.appendChild(form);
	},
	create_form : function() {
		var ol = document.createElement('ol');
		var div = document.createElement('div');
		
		div.classList.add('button-center');
		
		var button = document.createElement('button');
		
		button.innerHTML = 'Проверить мои результаты';
		button.type ='submit'; 
		button.name = 'check';

		var form = document.querySelector('.form-test');
		
		form.appendChild(ol);
		form.appendChild(div);
		div.appendChild(button);
	},
	create_li: function() {
		var ol = document.querySelector('ol');
		
		for(var i = 0; i < 3; i++) {
			
			var num = i + 1;
			var li = document.createElement('li');
			
			li.innerHTML = 'Вопрос №' + num;
			ol.appendChild(li);
		}
	},
	create_content_li: function() {
		var form = document.querySelector('form');
		var li = form.querySelectorAll('li');
		
		for(var i = 0; i < 3; i++) {
			
			var ul = document.createElement('ul');
			
			ul.classList.add('menu-variant');
			li[i].appendChild(ul);
		    ul = li[i].querySelector('ul');
            
			for(var j = 0; j < 3; j++) {
				
				var num1 = i + 1;
                var num2 = j + 1;
				var li_in_ul = document.createElement('li');
				
				ul.appendChild(li_in_ul);
				
				var label = document.createElement('label');
				
				li_in_ul.appendChild(label);

				var input = document.createElement('input');
				
				input.type = 'checkbox';
				input.name = "checkbox_" + num1 + '_' + num2 ;
				label.appendChild(input);

			    var span = document.createElement('span');

				span.innerHTML = 'Вариант ответа №' + num2;
				label.appendChild(span);

			}
		}


	}

}
test.create_element();
test.create_form();
test.create_li();
test.create_content_li();




