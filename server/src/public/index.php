<?php

// Bring in the Request and Response object
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

// allows us to refer to the slim dependencies
require '../../vendor/autoload.php';

// Allow any resource to access your resource
// This enables cross origin HTTP Requests from different domains
header("Access-Control-Allow-Origin:*");


// creates the main slim object and enables us to create routes
$app = new \Slim\App;


// require the php file containing the connection to the database
require 'db.php';
// require the php file containing the route requests
require 'requests.php';

// run app run to make it work
$app->run();
