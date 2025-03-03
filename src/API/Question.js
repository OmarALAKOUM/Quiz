const questions = [
  {
    question:
      "Which file contains Laravel's environment configuration settings?",
    options: [".env", "config/app.php", "config/database.php", "config/.env"],
    answer: ".env",
  },
  {
    question: "What is the purpose of Laravel migrations?",
    options: [
      "To create and modify database tables",
      "To seed database with test data",
      "To manage HTTP routes",
      "To authenticate users",
    ],
    answer: "To create and modify database tables",
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
    answer: "Route::get('/', 'HomeController@index')",
  },
  {
    question: "Which command is used to install Laravel dependencies?",
    options: [
      "composer install",
      "composer update",
      "composer create-project",
      "php artisan install",
    ],
    answer: "composer install",
  },
  {
    question: "What does the `php artisan serve` command do?",
    options: [
      "Runs a local development server",
      "Creates a new database",
      "Starts a queue listener",
      "Runs migrations",
    ],
    answer: "Runs a local development server",
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
    answer: "Model::all()",
  },
  {
    question:
      "Which of the following Blade directives is used to display content?",
    options: ["@show", "@yield", "@display", "@content"],
    answer: "@yield",
  },
  {
    question: "Which service provider is used to register a route in Laravel?",
    options: [
      "RouteServiceProvider",
      "AppServiceProvider",
      "DatabaseServiceProvider",
      "ViewServiceProvider",
    ],
    answer: "RouteServiceProvider",
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
    answer: "config/app.php",
  },
  {
    question: "Which method is used to store data in the Laravel session?",
    options: [
      "Session::store()",
      "Session::put()",
      "Session::save()",
      "Session::set()",
    ],
    answer: "Session::put()",
  },
];
export default questions;
