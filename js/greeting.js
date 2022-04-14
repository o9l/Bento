// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'Matcha';

// Here you can change your greetings
var gree1 = 'It\'s past your bedtime!';
var gree2 = 'Mornin\' ';
var gree3 = 'Afternoon, ';
var gree4 = 'Good evening, ';
var gree5 = 'Good evening ';
var gree6 = 'Good evening ';

// Punctuation
var ep = '!';
var peri = '.';

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
    document.getElementById('greetings').innerText = gree1;
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2 + name + ep;
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree3 + name + ep;
} else  {
    document.getElementById('greetings').innerText = gree4 + name + peri;
}
