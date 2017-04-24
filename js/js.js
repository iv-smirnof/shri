var selection_user ="";
var testonchange = "";
var index_i_date = "";
var arr_in = [];
var arrT = [];
var set_date = new Set();
var set_name = new Set();
var set_auditorium = new Set();
var set_school = new Set();
var set_city = new Set();
var set_title_enter = new Set();
var	set_auditorium_enter = new Set();
var	set_date_enter = new Set();
var	set_name_enter = new Set();
var	set_school_enter = new Set();
var date_now = new Date();
var edit_name  = document.getElementById("edit_field_name");
var edit_date  = document.getElementById("edit_field_date");
var edit_name_text  = document.getElementById("edit_field_name_text");
var edit_school_title  = document.getElementById("edit_field_school_title");
var edit_pupil  = document.getElementById("edit_field_pupil");
var edit_capacity  = document.getElementById("edit_field_capacity");
var edit_schedule  = document.getElementById("edit_field_schedule");
var edit_auditorium  = document.getElementById("edit_field_auditorium");
var edit_title  = document.getElementById("edit_field_title");
var edit_hidden  = document.getElementById("edit_hidden");
var date_enter_select = document.getElementById("date_enter_select");
var name_enter_select = document.getElementById("name_enter_select");
var school_enter_select = document.getElementById("school_enter_select");
var auditorium_enter_select = document.getElementById("auditorium_enter_select");
var title_enter_select = document.getElementById("title_enter_select");
var submit_enter_select = document.getElementById("submit_enter_select");
var submit_enter_select_date =  "";
var submit_enter_select_name =  "";
var submit_enter_select_school =  "";
var submit_enter_select_auditorium = "";
var submit_enter_select_title = "";
var testondName =  document.getElementById('filter_title');
var testondDate =  document.getElementById('filter_date');
var testondDate_start =  document.getElementById('filter_date_start');
var testondDate_end =  document.getElementById('filter_date_end');
var testondSchool =  document.getElementById('filter_name');
var testondauditorium =  document.getElementById('filter_auditorium');
var submit_enter_select_date_start = "";
var submit_enter_select_date_end = "";
var submit_enter_select_name_start = "";
var submit_enter_select_name_end =  "";
var submit_enter_select_school_start = "";
var submit_enter_select_school_end =  "";
var submit_enter_select_auditorium_start = "";
var submit_enter_select_auditorium_end = "";
var submit_enter_select_title_start = "";
var submit_enter_select_title_end = "";
function formatDate(date) {
  var hh = date.getHours();
  var mmm = date.getMinutes();
  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  var yy = date.getFullYear();	
  if (yy < 10) yy = '0' + yy;
  return dd + '.' + mm + '.' + yy  + ' <br>' + hh + '.' + mmm;
} 
var school_arr_insert = [];
var data_arr_insert = [];
var auditorium_arr_insert = [];
var name_arr_insert =[];
var title_arr_insert =[];
var date_arr_insert =[];
function title_insert(title){
	if ((title != "")  && (title_arr_insert.indexOf(title) == -1)) {
		title_arr_insert.push(title);	
	}
}
function date_insert(date){
	if ((date != "") && (date_arr_insert.indexOf(date) == -1)) {
		date_arr_insert.push(date);
	}
}
function school_insert(title, pupil){
	var school = {
		title: title,
		pupil: pupil
	}
	var search_same = search_in_arr(title, school_arr_insert, "title");
	if ((title != "") && (pupil != "") && (search_same)) {
		school_arr_insert.push(school);
	}
}
function auditorium_insert(capacity, title, schedule){
	var auditorium = {
		capacity: capacity,  
	    title: title,
	    schedule: schedule
	}
	var search_same = search_in_arr(title, auditorium_arr_insert, "auditorium");
	if ((title != "") && (capacity != "") && (search_same)) {
		auditorium_arr_insert.push(auditorium);
	}
}
function name_insert(name, name_text){
	var name = {
		name: name,  
	    name_text: name_text
	}
	var search_same = search_in_arr(name.name, name_arr_insert, 'name');
	if ((name.name != "") && (search_same)) {
		name_arr_insert.push(name);
	}
}
function search_in_arr(str, data, title) {
	for (var key in data) {
		if (title == "name") {
			if (data[key][title] == str) {
				return false;
			}
		}
		else{
		if (data[key].title == str) {
			return false;
		}
		}
	}
	return true;
}
name_interface_enter.onclick = function() {
	var name_interface = document.getElementById("name_interface");
	var name_text_interface = document.getElementById("name_text_interface");
	var search_same = search_in_arr(name_interface.value, name_arr_insert, 'name');
	if ((name_interface.value != "") && (search_same)) {
		name_insert(name_interface.value, name_text_interface.value);
		name_interface.value = "";
		name_text_interface.value = "";
		name_interface.className = "";
		dom_enter_name();
	}
	else{
		name_interface.className = "Nan";
	}
}
date_interface_enter.onclick = function() {
	var date_interface = document.getElementById("date_interface");
	if ((date_interface.value != "") && (date_arr_insert.indexOf(date_interface.value) == -1)) {
		date_insert(date_interface.value);
		date_interface.value = "";
		date_interface.className = "";
		dom_enter_date();
	}
	else{
		date_interface.className = "Nan";
	}
}
title_interface_enter.onclick = function() {
	var title_interface = document.getElementById("title_interface");
	if ((title_interface.value != "")  && (title_arr_insert.indexOf(title_interface.value) == -1)) {
		title_insert(title_interface.value);
		title_interface.value = "";
		title_interface.className = "";
		dom_enter_title();
	}
	else{
		title_interface.className = "Nan";
	}
}
school_interface_enter.onclick = function() {
	var school_interface = document.getElementById("school_interface");
	var pupil_interface = document.getElementById("pupil_interface");
	var search_same = search_in_arr(school_interface.value, school_arr_insert, "title");
	if ((school_interface.value != "") && (pupil_interface.value != "") && (search_same)) {
		school_insert(school_interface.value, pupil_interface.value);
		school_interface.value = "";
		school_interface.className = "";
		pupil_interface.value = "";
		pupil_interface.className = "";
		dom_enter_school();
	}
	else{

		school_interface.className = "Nan";
		pupil_interface.className = "Nan";
	}
}
auditorium_title_interface_enter.onclick = function() {
	var auditorium_title_interface = document.getElementById("auditorium_title_interface");
	var capacity_interface = document.getElementById("capacity_interface");
	var auditorium_way_interface = document.getElementById("auditorium_way_interface");
	var search_same = search_in_arr(auditorium_title_interface.value, auditorium_arr_insert, "auditorium");
	if ((auditorium_title_interface.value != "") && (capacity_interface.value != "") && (search_same)) {
		auditorium_insert(capacity_interface.value, auditorium_title_interface.value, auditorium_way_interface.value);
		auditorium_title_interface.value = "";
		auditorium_title_interface.className = "";
		capacity_interface.value = "";
		capacity_interface.className = "";
		auditorium_way_interface.value ="";
		dom_enter_auditorium();
	}
	else{
		auditorium_title_interface.className = "Nan";
		capacity_interface.className = "Nan";
	}
}
edit_field_enter.onclick = function() {
	var edit_text = document.querySelector(".edit_text_nan");
	var edit_text_p = document.createElement("p");
	var edit_text_p_delete = document.querySelector(".edit_text_nan p");
	for (var i = 0; i < data_arr_insert.length; i++) {
		if ((data_arr_insert[i].date == edit_date.value) && (data_arr_insert[i].school.title.indexOf(edit_school_title.value) != -1)) {
			edit_text.removeChild(edit_text_p_delete);
			edit_text_p.innerHTML = "У одной школы не может быть одновременно больше одной лекции";
			edit_text.appendChild(edit_text_p);
			return;
		}
	}
	for (var i = 0; i < data_arr_insert.length; i++) {
		if ((data_arr_insert[i].date == edit_date.value) && (data_arr_insert[i].city.title == edit_auditorium.value)) {
			edit_text.removeChild(edit_text_p_delete);
			edit_text_p.innerHTML = "В одной аудитории не можеть быть одновременно больше одной лекции";
			edit_text.appendChild(edit_text_p);
			return;
		}
	}
	for (var i = 0; i < data_arr_insert.length; i++) {
		if ((data_arr_insert[i].date == edit_date.value) && (data_arr_insert[i].name.name == edit_name.value)) {
			edit_text.removeChild(edit_text_p_delete);
			edit_text_p.innerHTML = "Лектор не может проводить больше 1 лекции одновременно";
			edit_text.appendChild(edit_text_p);
			return;
		}
	}
	if ((edit_capacity.value < edit_pupil.value)) {
			edit_text.removeChild(edit_text_p_delete);
			edit_text_p.innerHTML = "Количество студентов больше вместимости аудитории";
			edit_text.appendChild(edit_text_p);
			return;		
	}
	if ((edit_date.value == "") && (edit_name.value == "") 	&& (edit_name_text.value == "") && (edit_school_title.value == "") && (edit_pupil.value == "") && (edit_capacity.value == "") && (edit_schedule.value == "") && (edit_auditorium.value == "") && (edit_title.value == "")) {
			edit_text.removeChild(edit_text_p_delete);
			edit_text_p.innerHTML = "Есть незаполненые поля";
			edit_text.appendChild(edit_text_p);
			return;
	}
	var edit_hidden = document.getElementById("edit_hidden");
	var rewrite_data = data_arr_insert[edit_hidden.value];
	rewrite_data.date = edit_date.value;
	rewrite_data.name.name = edit_name.value;
	rewrite_data.name.name_text = edit_name_text.value;
	rewrite_data.school.title = edit_school_title.value;
	rewrite_data.school.pupil = edit_pupil.value;
	rewrite_data.city.capacity = edit_capacity.value;
	rewrite_data.city.schedule = edit_schedule.value;
	rewrite_data.city.title = edit_auditorium.value;
	rewrite_data.title = edit_title.value;
}
submit_enter_select.onclick = function() {
submit_enter_select_date_start = date_enter_select.value.search( /\[/i);
submit_enter_select_date_end = date_enter_select.value.search( /\]/i);
submit_enter_select_date = date_enter_select.value.slice(submit_enter_select_date_start + 1, submit_enter_select_date_end);

submit_enter_select_name_start = name_enter_select.value.search( /\[/i);
submit_enter_select_name_end = name_enter_select.value.search( /\]/i);
submit_enter_select_name = name_enter_select.value.slice(submit_enter_select_name_start + 1, submit_enter_select_name_end);

submit_enter_select_school_start = school_enter_select.value.search( /\[/i);
submit_enter_select_school_end = school_enter_select.value.search( /\]/i);
submit_enter_select_school = school_enter_select.value.slice(submit_enter_select_school_start + 1, submit_enter_select_school_end);

submit_enter_select_auditorium_start = auditorium_enter_select.value.search( /\[/i);
submit_enter_select_auditorium_end = auditorium_enter_select.value.search( /\]/i);
submit_enter_select_auditorium = auditorium_enter_select.value.slice(submit_enter_select_auditorium_start + 1, submit_enter_select_auditorium_end);

submit_enter_select_title_start = title_enter_select.value.search( /\[/i);
submit_enter_select_title_end = title_enter_select.value.search( /\]/i);
submit_enter_select_title = title_enter_select.value.slice(submit_enter_select_title_start + 1, submit_enter_select_title_end);

data_insert(date_arr_insert[submit_enter_select_date], school_arr_insert[submit_enter_select_school], name_arr_insert[submit_enter_select_name], auditorium_arr_insert[submit_enter_select_auditorium], title_arr_insert[submit_enter_select_title]);
filterJ();
select_dom();
}
// Ввод тестовых данных намеренно с дубликатами для пакоза работы фильтра.
date_insert("2020-04-12T20:12:00.000+03:00");
date_insert("2000-04-12T20:12:00.000+03:00");
date_insert("2012-04-12T20:12:00.000+03:00");
date_insert("2022-04-12T20:12:00.000+03:00");
date_insert("2020-04-12T20:12:00.000+03:00");
date_insert("2000-04-12T20:12:00.000+03:00");
date_insert("2012-04-12T20:12:00.000+03:00");
date_insert("2022-04-12T20:12:00.000+03:00");
date_insert("2020-04-12T20:12:00.000+03:00");
date_insert("2000-04-12T20:12:00.000+03:00");
date_insert("2012-04-12T20:12:00.000+03:00");
date_insert("2022-04-12T20:12:00.000+03:00");
date_insert("2020-04-12T20:12:00.000+03:00");
date_insert("2000-04-12T20:12:00.000+03:00");
date_insert("2012-04-12T20:12:00.000+03:00");
date_insert("2022-04-12T20:12:00.000+03:00");
title_insert("Лекция один");
title_insert("Лекция два");
title_insert("Лекция три");
title_insert("Лекция один");
title_insert("Лекция два");
title_insert("Лекция три");
title_insert("Лекция один");
title_insert("Лекция два");
title_insert("Лекция три");
title_insert("Лекция один");
title_insert("Лекция два");
title_insert("Лекция три");
title_insert("Лекция один");
title_insert("Лекция два");
title_insert("Лекция три");
name_insert("Кирилл", "Описание Кирилл");
name_insert("Кирилл", "Описание Кирилл");
name_insert("Андрей", "Описание  Андрей");
name_insert("Кирилл", "Описание Кирилл");
name_insert("Андрей", "Описание  Андрей");
name_insert("Кирилл", "Описание Кирилл");
name_insert("Андрей", "Описание  Андрей");
name_insert("Ваня", "Описание Иван");
auditorium_insert(40, "Синий кит", "Едь туда не знаю куда, найди то незнаю что и найди Кита");
auditorium_insert(40, "Оранжевый кот", "Едь туда не знаю куда, найди то незнаю что и нади Кота");
auditorium_insert(60, "Зал мыслителей", "Едь туда не знаю куда, найди мысль");
auditorium_insert(40, "Оранжевый кот", "Едь туда не знаю куда, найди то незнаю что и нади Кота");
auditorium_insert(60, "Зал мыслителей", "Едь туда не знаю куда, найди мысль");
auditorium_insert(40, "Оранжевый кот", "Едь туда не знаю куда, найди то незнаю что и нади Кота");
auditorium_insert(60, "Зал мыслителей", "Едь туда не знаю куда, найди мысль");
school_insert("Разработка интерфейсов", 22);
school_insert("Разработка дизайна", 30);
school_insert("Разработка приложений", 40);
school_insert("Разработка дизайна", 30);
school_insert("Разработка приложений", 40);
school_insert("Разработка дизайна", 30);
school_insert("Разработка приложений", 40);
school_insert("Разработка приложений <br> Разработка дизайна", 20);
// Перезапись массива для изменения значений.
name_arr_insert[0].name = "сергей";
// Внесение данных в основной массив.
data_insert("2017-04-12T20:12:00.000+03:00", school_arr_insert[3], name_arr_insert[0], auditorium_arr_insert[1], title_arr_insert[0]);
data_insert("2017-04-12T20:12:00.000+03:00", school_arr_insert[0], name_arr_insert[1], auditorium_arr_insert[1], title_arr_insert[0]);
data_insert(date_arr_insert[0], school_arr_insert[1], name_arr_insert[1], auditorium_arr_insert[2], title_arr_insert[0]);
data_insert(date_arr_insert[1], school_arr_insert[3], name_arr_insert[2], auditorium_arr_insert[0], title_arr_insert[0]);
data_insert(date_arr_insert[2], school_arr_insert[3], name_arr_insert[1], auditorium_arr_insert[1], title_arr_insert[1]);
data_insert(date_arr_insert[0], school_arr_insert[3], name_arr_insert[1], auditorium_arr_insert[1], title_arr_insert[0]);
data_insert(date_arr_insert[2], school_arr_insert[2], name_arr_insert[2], auditorium_arr_insert[1], title_arr_insert[2]);
data_insert(date_arr_insert[1], school_arr_insert[1], name_arr_insert[1], auditorium_arr_insert[2], title_arr_insert[0]);
data_insert(date_arr_insert[3], school_arr_insert[1], name_arr_insert[1], auditorium_arr_insert[0], title_arr_insert[1]);
data_insert(date_arr_insert[0], school_arr_insert[0], name_arr_insert[0], auditorium_arr_insert[1], title_arr_insert[0]);
// Функция внесения основных данных
function data_insert(dateT, schoolT, nameT, cityT, titleT){
	var objectT = {
			date: dateT,
			school: {
				title: schoolT.title,	
				pupil: schoolT.pupil
			},
			name: {
				name: nameT.name,
				name_text: nameT.name_text
			},
		    city: {
	    		capacity: cityT.capacity,
	    		title: cityT.title,
	    		schedule: cityT.schedule
		    },
		    title: titleT, 
		    market: false 
	}	
	if ((data_arr_insert.length <= 0) && (objectT.city.capacity >= objectT.school.pupil)) {
		data_arr_insert.push(objectT);
		return;
	}
	for (var i = 0; i < data_arr_insert.length; i++) {
		if ((data_arr_insert[i].date == objectT.date) && (data_arr_insert[i].school.title.indexOf(objectT.school.title) != -1)) {
			return;
		}
	}
	for (var i = 0; i < data_arr_insert.length; i++) {
		if ((data_arr_insert[i].date == objectT.date) && (data_arr_insert[i].city.title == objectT.city.title)) {
			return;
		}
	}
	for (var i = 0; i < data_arr_insert.length; i++) {
		if ((data_arr_insert[i].date == objectT.date) && (data_arr_insert[i].name.name == objectT.name.name)) {
			return;
		}
	}
	if ((objectT.city.capacity < objectT.school.pupil)) {
			return;		
	}	
		data_arr_insert.push(objectT);
		data_arr_insert.sort(compareNumeric);
}
// Формирование select из данных в базе с предварительной очисткой значений option.
function select_dom() {
	filterJ();
for (var i = 0; i < data_arr_insert.length; i++) {
	set_auditorium.add(data_arr_insert[i].city.title);
	set_date.add(data_arr_insert[i].date);
	set_name.add(data_arr_insert[i].name.name);
	if (data_arr_insert[i].school.title.indexOf("<br>") == -1) {
		set_school.add(data_arr_insert[i].school.title);
	}
}
var opts_auditorium = testondauditorium.options;
while(opts_auditorium.length > 1){
opts_auditorium[opts_auditorium.length-1] = null;
}
var opts_school = testondSchool.options;
while(opts_school.length > 1){
opts_school[opts_school.length-1] = null;
}
var opts_date_end = testondDate_end.options;
while(opts_date_end.length > 1){
opts_date_end[opts_date_end.length-1] = null;
}
var opts_date_start = testondDate_start.options;
while(opts_date_start.length > 1){
opts_date_start[opts_date_start.length-1] = null;
}
var opts_date = testondDate.options;
while(opts_date.length > 1){
opts_date[opts_date.length-1] = null;
}
var opts_name = testondName.options;
while(opts_name.length > 1){
opts_name[opts_name.length-1] = null;
}
set_date.forEach((date, valueAgain, set_date) => {
var filter_date_set = document.createElement('option');
	var in_o = Date.parse(date);
	var in_moment = new Date(in_o);
	var in_screen = formatDate(in_moment);
	filter_date_set.innerHTML = ''+ in_screen +'';
	filter_date_set.setAttribute('value', in_screen);
	filter_date.appendChild(filter_date_set);
var filter_date_set_start = filter_date_set.cloneNode(true);
	filter_date_start.appendChild(filter_date_set_start);
var filter_date_set_end = filter_date_set.cloneNode(true); 
	filter_date_end.appendChild(filter_date_set_end);
});
set_name.forEach((name, valueAgain, set_name) => {
var filter_name_set = document.createElement('option');
	filter_name_set.innerHTML = ''+ name +'';
	filter_name_set.setAttribute('value', name);
	filter_name.appendChild(filter_name_set);
});
set_auditorium.forEach((auditorium, valueAgain, set_auditorium) => {
var filter_auditorium_set = document.createElement('option');
	filter_auditorium_set.innerHTML = ''+ auditorium +'';
	filter_auditorium_set.setAttribute('value', auditorium);
	filter_auditorium.appendChild(filter_auditorium_set);
});
set_school.forEach((school, valueAgain, set_school) => {
var filter_school_set = document.createElement('option');
	filter_school_set.innerHTML = ''+ school +'';
	filter_school_set.setAttribute('value', school);
	filter_title.appendChild(filter_school_set);
});
// очищаем массив чтобы не машал для других вычислений.
arr_in.splice(0, arr_in.length);
}
document.addEventListener("DOMContentLoaded", select_dom);
function select_dom_enter() {
	filterJ();
for (var i = 0; i < auditorium_arr_insert.length; i++) {
	set_auditorium_enter.add(auditorium_arr_insert[i].title + "[" + i + "]");
	}
for (var i = 0; i < date_arr_insert.length; i++) {
	set_date_enter.add(date_arr_insert[i] + "[" + i + "]");
	}
for (var i = 0; i < name_arr_insert.length; i++) {
	set_name_enter.add(name_arr_insert[i].name + "[" + i + "]");
	}
for (var i = 0; i < title_arr_insert.length; i++) {
	set_title_enter.add(title_arr_insert[i] + "[" + i + "]");
	}
for (var i = 0; i < school_arr_insert.length; i++) {
	set_school_enter.add(school_arr_insert[i].title + "[" + i + "]");
	}
set_date_enter.forEach((date, valueAgain, set_date) => {
var enter_date_set = document.createElement('option');
	submit_enter_select_date_start = date.search( /\[/i);
	submit_enter_select_date_end = date.search( /\]/i);
	submit_enter_select_date = date.slice(submit_enter_select_date_start + 1, submit_enter_select_date_end);
	index_i_date = "[" + submit_enter_select_date + "]";
	date = date.slice(0, 29);
	var in_o = Date.parse(date);
	var in_moment = new Date(in_o);
	var in_screen = formatDate(in_moment);
	enter_date_set.innerHTML = ''+ in_screen + index_i_date;
	enter_date_set.setAttribute('value', in_screen + index_i_date);
	date_enter_select.appendChild(enter_date_set);
});
set_name_enter.forEach((name, valueAgain, set_name) => {
var enter_name_set = document.createElement('option');
	enter_name_set.innerHTML = ''+ name +'';
	enter_name_set.setAttribute('value', name);
	name_enter_select.appendChild(enter_name_set);
});
set_auditorium_enter.forEach((auditorium, valueAgain, set_auditorium) => {
var enter_auditorium_set = document.createElement('option');
	enter_auditorium_set.innerHTML = ''+ auditorium +'';
	enter_auditorium_set.setAttribute('value', auditorium);
	auditorium_enter_select.appendChild(enter_auditorium_set);
});
set_school_enter.forEach((school, valueAgain, set_school) => {
var enter_school_set = document.createElement('option');
	enter_school_set.innerHTML = ''+ school +'';
	enter_school_set.setAttribute('value', school);
	school_enter_select.appendChild(enter_school_set);
});
set_title_enter.forEach((title, valueAgain, set_title) => {
var enter_title_set = document.createElement('option');
	enter_title_set.innerHTML = ''+ title +'';
	enter_title_set.setAttribute('value', title);
	title_enter_select.appendChild(enter_title_set);
});
}
document.addEventListener("DOMContentLoaded", select_dom_enter);
// Функции формирующие select при добавлении новых данных в базу
function dom_enter_title() {
var opts = title_enter_select.options;
while(opts.length > 1){
opts[opts.length-1] = null;
}
for (var i = 0; i < title_arr_insert.length; i++) {
	set_title_enter.add(title_arr_insert[i] + "[" + i + "]");
	}
set_title_enter.forEach((title, valueAgain, set_title) => {
var enter_title_set = document.createElement('option');
	enter_title_set.innerHTML = ''+ title +'';
	enter_title_set.setAttribute('value', title);
	title_enter_select.appendChild(enter_title_set);
});
}
function dom_enter_school() {
var opts = school_enter_select.options;
while(opts.length > 1){
opts[opts.length-1] = null;
}
for (var i = 0; i < school_arr_insert.length; i++) {
	set_school_enter.add(school_arr_insert[i].title + "[" + i + "]");
	}
set_school_enter.forEach((school, valueAgain, set_school) => {
var enter_school_set = document.createElement('option');
	enter_school_set.innerHTML = ''+ school +'';
	enter_school_set.setAttribute('value', school);
	school_enter_select.appendChild(enter_school_set);
});
}
function dom_enter_auditorium() {
var opts = auditorium_enter_select.options;
while(opts.length > 1){
opts[opts.length-1] = null;
}
for (var i = 0; i < auditorium_arr_insert.length; i++) {
	set_auditorium_enter.add(auditorium_arr_insert[i].title + "[" + i + "]");
	}
set_auditorium_enter.forEach((auditorium, valueAgain, set_auditorium) => {
var enter_auditorium_set = document.createElement('option');
	enter_auditorium_set.innerHTML = ''+ auditorium +'';
	enter_auditorium_set.setAttribute('value', auditorium);
	auditorium_enter_select.appendChild(enter_auditorium_set);
});
}
function dom_enter_name() {
var opts = name_enter_select.options;
while(opts.length > 1){
opts[opts.length-1] = null;
}
for (var i = 0; i < name_arr_insert.length; i++) {
	set_name_enter.add(name_arr_insert[i].name  + "[" + i + "]");
	}
set_name_enter.forEach((name, valueAgain, set_name) => {
var enter_name_set = document.createElement('option');
	enter_name_set.innerHTML = ''+ name +'';
	enter_name_set.setAttribute('value', name);
	name_enter_select.appendChild(enter_name_set);
});
}
function dom_enter_date() {
var opts = date_enter_select.options;
while(opts.length > 1){
opts[opts.length-1] = null;
}
for (var i = 0; i < date_arr_insert.length; i++) {
	set_date_enter.add(date_arr_insert[i] + "[" + i + "]");
	}
set_date_enter.forEach((date, valueAgain, set_date) => {
var enter_date_set = document.createElement('option');
var submit_enter_select_date_start = date.search( /\[/i);
var submit_enter_select_date_end = date.search( /\]/i);
	submit_enter_select_date = date.slice(submit_enter_select_date_start + 1, submit_enter_select_date_end);
	index_i_date = "[" + submit_enter_select_date + "]";
	date = date.slice(0, 29);
	var in_o = Date.parse(date);
	var in_moment = new Date(in_o);
	var in_screen = formatDate(in_moment);
	enter_date_set.innerHTML = ''+ in_screen + index_i_date;
	enter_date_set.setAttribute('value', in_screen + index_i_date);
	date_enter_select.appendChild(enter_date_set);
});
}
// Вызов функции фильтрации при изменении значения select
testondDate.onchange = filterJ;
testondDate_start.onchange = filterJ;
testondDate_end.onchange = filterJ;
testondName.onchange = filterJ;
testondSchool.onchange = filterJ;
testondauditorium.onchange = filterJ;
function testonclick(){
var element = document.querySelector('#schedule_conclusion');
var dochelement =  document.querySelector('#schedule_conclusion div.content_schedule_block_row:last-child');
while (dochelement !=null) {
	var dochelement =  document.querySelector('#schedule_conclusion div.content_schedule_block_row:last-child');
	if (dochelement !=null) {
		element.removeChild(dochelement);
	}	
}
}
// Очистка выбраных фильтров
function reset(){
	document.getElementById('filter_title').selectedIndex = 0;
	document.getElementById('filter_date').selectedIndex = 0;
	document.getElementById('filter_name').selectedIndex = 0;
	document.getElementById('filter_auditorium').selectedIndex = 0;
	document.getElementById('filter_date_start').selectedIndex = 0;
	document.getElementById('filter_date_end').selectedIndex = 0;
	filterJ();
}
select_reset.onclick = reset;
// удаление элемента из базы по нажатию крестика в веб версии.
function delete_function(title){
	data_arr_insert.splice(title, 1);
	filterJ();
}
// Выводит данные в input для редактирование 
function edit_function(title){
	edit_name.value = data_arr_insert[title].name.name;
	edit_date.value = data_arr_insert[title].date;
	edit_name_text.value = data_arr_insert[title].name.name_text;
	edit_school_title.value = data_arr_insert[title].school.title;
	edit_pupil.value = data_arr_insert[title].school.pupil;
	edit_capacity.value = data_arr_insert[title].city.capacity;
	edit_schedule.value = data_arr_insert[title].city.schedule;
	edit_auditorium.value = data_arr_insert[title].city.title;
	edit_title.value = data_arr_insert[title].title;
	edit_hidden.value = title;
	// filterJ();
}
filterJ();
// Функция фильтрации. 
function filterJ() {	
var filter_date_value= document.getElementById('filter_date').value;
var filter_name_value= document.getElementById('filter_name').value;
var filter_auditorium_value= document.getElementById('filter_auditorium').value;
var filter_title_value= document.getElementById('filter_title').value;
var filter_date_start_value= document.getElementById('filter_date_start').value;
var filter_date_end_value= document.getElementById('filter_date_end').value;
	testonclick();
	testonchange =this.value;	
// перебираем объект, узнаем свойства главного обьекта, и свойства дочерних элементов.
var check = 0;
var success = 0;
var in_o = 0;
var in_moment = 0;
var in_screen = 0;
var in_o_parse = 0;
var in_moment_parse = 0;
var filter_date_value_parse = "";
for (var key in data_arr_insert) {
	if (filter_date_value != "false"){
		check++;
			var in_o = Date.parse(data_arr_insert[key].date);
			var in_moment = new Date(in_o);
			var in_screen = formatDate(in_moment);
		if (in_screen == filter_date_value){
			success = success + 1;
		}
	}
	if (filter_date_start_value != "false"){
		check++;
			var in_o = Date.parse(data_arr_insert[key].date);
			filter_date_value_parse = filter_date_start_value.substr(6,4) + "-" + filter_date_start_value.substr(3,2) + "-" + filter_date_start_value.substr(0,2) + "T" + filter_date_start_value.substr(15,2) + ":" + filter_date_start_value.substr(18,2) + ":00.000+03:00";
			var in_o_parse = Date.parse(filter_date_value_parse);
		if (in_o >= in_o_parse){ 
			success = success + 1;
		}
	}
	if (filter_date_end_value != "false"){
		check++;
			var in_o = Date.parse(data_arr_insert[key].date);
			filter_date_value_parse = filter_date_end_value.substr(6,4) + "-" + filter_date_end_value.substr(3,2) + "-" + filter_date_end_value.substr(0,2) + "T" + filter_date_end_value.substr(15,2) + ":" + filter_date_end_value.substr(18,2) + ":00.000+03:00";
			var in_o_parse = Date.parse(filter_date_value_parse);
		if (in_o <= in_o_parse){ 
			success = success + 1;
		}
	}
	if (filter_name_value != 'false'){
		check++;
		if (data_arr_insert[key].name.name == filter_name_value){
			success = success + 1;
		}
	}
	if (filter_auditorium_value != 'false'){
		check++;
		if (data_arr_insert[key].city.title == filter_auditorium_value){
			success = success + 1;
		}
	}
	if (filter_title_value != 'false'){
		check++;
		if (data_arr_insert[key].school.title.indexOf(filter_title_value) != -1) {
				success = success + 1;	
		}

	}
		if (check == success) {
			arr_in.push(data_arr_insert[key]);
			}
check = 0;
success = 0;	
}
// создаем div строку для нашей таблицы и заполняем ее данными
	var testdiv = document.createElement('div');
	testdiv.className = "content_schedule_block_row";
	testdiv.innerHTML = '<div class="edit" onclick = "edit_function(this.getAttribute(\'title\'))" title=""></div><div class="date_row"></div> \
		<div class="title_row"><a href="#"></a></div>\
		<div class="name_row"><a onclick="show(\'block\', this)"></a></div>\
		<div onclick="show(\'block\', this)" class="place_row"></div>\
		<div class="link_row"><a href="#">Подробнее</a></div>\
		<div class="delete" onclick="delete_function(this.getAttribute(\'title\'))" title=""><span class="line-close"></span><span class="line-close"></span></div>';
for (var i = 0; i < arr_in.length; i++) {
	var testdiv2 = testdiv.cloneNode(true);	
	var in_o = Date.parse(arr_in[i].date);
	arrT.push(in_o);
	var in_moment = new Date(in_o);
	var in_screen = formatDate(in_moment);
	testdiv2.querySelector('.date_row').innerHTML = in_screen;
	testdiv2.querySelector('.delete').setAttribute("title", i);
	testdiv2.querySelector('.edit').setAttribute("title", i);
	if ( in_moment < date_now) {
		testdiv2.querySelector('.date_row').className = "past date_row";
		testdiv2.querySelector('.link_row a').className = "past_link";
		testdiv2.querySelector('.title_row a').className = "past_link";
	}
	else{
		testdiv2.querySelector('.link_row a').removeAttribute("href");
		testdiv2.querySelector('.link_row a').setAttribute("title", "Будет доступно после проведения лекции");
		testdiv2.querySelector('.title_row a').removeAttribute("href");
		testdiv2.querySelector('.title_row a').setAttribute("title", "Будет доступно после проведения лекции");
	}
	testdiv2.querySelector('.title_row a').innerHTML = arr_in[i].title;
	testdiv2.querySelector('.name_row a').innerHTML = arr_in[i].name.name;
	testdiv2.querySelector('.place_row').innerHTML = arr_in[i].city.title;
	schedule_conclusion.appendChild(testdiv2);
}
if (arrT.length == 0) {
	var testdiv_null = document.createElement('div');
	testdiv_null.className = "content_schedule_block_row";
	testdiv_null.innerHTML = '<p class="text-null">Ничего не найдено.<br>Уменьшите количество критериев фильтрации для получения результатов.</p>';
	schedule_conclusion.appendChild(testdiv_null);
}
arr_in.splice(0, arr_in.length);
arrT.splice(0, arrT.length);
testonchange = "";
}
// показ и скрытие модальных окон со вставкой нужной информации
function show(state, obj){
	if (obj != undefined) {
			var overlap = 0;
		for (var key = 0; key < data_arr_insert.length; key++) {
			if (overlap > 0) {
				break;
			}
			if (data_arr_insert[key].name.name == obj.innerHTML) {
				overlap++; 
			var show_title = document.querySelector("#window h4");
			show_title.innerHTML = data_arr_insert[key].name.name;	
			var show_text = document.querySelector("#window p");
			show_text.innerHTML = data_arr_insert[key].name.name_text;
			var show_capacity = document.querySelector("#window p~span");
			show_capacity.innerHTML = "";
			}
			if (data_arr_insert[key].city.title == obj.innerHTML) {
				overlap++; 
			var show_title = document.querySelector("#window h4");
			show_title.innerHTML = data_arr_insert[key].city.title;	
			var show_text = document.querySelector("#window p");
			show_text.innerHTML = data_arr_insert[key].city.schedule;
			var show_capacity = document.querySelector("#window p~span");
			show_capacity.innerHTML = "Вместимость аудитории - " + data_arr_insert[key].city.capacity;
			}
		}	
	}
	document.getElementById('window').style.display = state;			
	document.getElementById('wrap').style.display = state; 			
}
// сортировка
function compareNumeric(a, b) {
	var in_oTa = Date.parse(a.date);
	var in_oTb = Date.parse(b.date);	
	return  in_oTa -  in_oTb;
}