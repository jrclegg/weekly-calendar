<?php

// Use the PSR 7 request object that represents
// the current HTTP Request received by the server
use \Psr\Http\Message\ServerRequestInterface as Request;

// Use the PSR7 response object that represents the
// current HTTP Response to be returned to the client
use \Psr\Http\Message\ResponseInterface as Response;

// creates the main slim object and enables us to create routes
$app = new \Slim\App;

// Make a get request to the route /calendar
$app->get('/calendar', function (Request $request, Response $Response){

	// create a variable to be an SQL query and grab
	// everything from the calendar api database table
	$sql = "SELECT * FROM slots INNER JOIN projects ON slots.project_id = projects.project_id";
	// We are using an exception in this block so
	// we use try. If the exception does not trigger the code
	// will continue as normal. If the exception triggers then
	// an exception is thrown
	try{
		//
		$db = new db();
		// Connect
		$db = $db->connect();

		$stmt = $db->query($sql);
		$calendar = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($calendar);
	} catch(PDOException $e){
		echo '{"error": {"text": '.$e->getMessage().'}';
	}
});

// Make a get request to the route /projects
$app->get('/projects', function (Request $request, Response $Response){

    // create a variable to be an SQL query and grab
    // everything from the calendar api database table
    $sql = "SELECT * FROM projects";
    // We are using an exception in this block so
    // we use try. If the exception does not trigger the code
    // will continue as normal. If the exception triggers then
    // an exception is thrown
    try{
        //
        $db = new db();
        // Connect
        $db = $db->connect();

        $stmt = $db->query($sql);
        $calendar = $stmt->fetchAll(PDO::FETCH_OBJ);
        $db = null;
        echo json_encode($calendar);
    } catch(PDOException $e){
        echo '{"error": {"text": '.$e->getMessage().'}';
    }
});
