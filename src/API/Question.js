const questions = [
  {
    question:
      "Which file contains Laravel's environment configuration settings?",
    options: [".env", "config/app.php", "config/database.php", "config/.env"],
    answer: 0, 
  },
  {
    question: "What is the purpose of Laravel migrations?",
    options: [
      "To create and modify database tables",
      "To seed database with test data",
      "To manage HTTP routes",
      "To authenticate users",
    ],
    answer: 0, 
  },
  {
    question:
      "Which of the following is a valid way to create a new route in Laravel?",
    options: [
      "Route::get('/', 'HomeController@index')",
      "Route::post('/home', 'HomeController@index')",
      "Route::controller('/home', 'HomeController')",
      "Route::create('/home')",
    ],
    answer: 0, 
  },
  {
    question: "Which command is used to install Laravel dependencies?",
    options: [
      "composer install",
      "composer update",
      "composer create-project",
      "php artisan install",
    ],
    answer: 0,
  },
  {
    question: "What does the `php artisan serve` command do?",
    options: [
      "Runs a local development server",
      "Creates a new database",
      "Starts a queue listener",
      "Runs migrations",
    ],
    answer: 0,
  },
  {
    question:
      "Which method in Laravel is used to retrieve all records from a database table using Eloquent?",
    options: [
      "Model::findAll()",
      "Model::get()",
      "Model::all()",
      "Model::select()",
    ],
    answer: 2, 
  },
  {
    question:
      "Which of the following Blade directives is used to display content?",
    options: ["@show", "@yield", "@display", "@content"],
    answer: 1, 
  },
  {
    question: "Which service provider is used to register a route in Laravel?",
    options: [
      "RouteServiceProvider",
      "AppServiceProvider",
      "DatabaseServiceProvider",
      "ViewServiceProvider",
    ],
    answer: 0,
  },
  {
    question:
      "Which file would you modify to add global variables for your Laravel application?",
    options: [
      "config/app.php",
      "config/database.php",
      "config/variables.php",
      "resources/views/layouts/app.blade.php",
    ],
    answer: 0, 
  },
  {
    question: "Which method is used to store data in the Laravel session?",
    options: [
      "Session::store()",
      "Session::put()",
      "Session::save()",
      "Session::set()",
    ],
    answer: 1, 
  }
];

export default questions;

