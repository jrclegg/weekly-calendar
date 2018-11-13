<?php

// set db class
class db {
    // Properties
     private $dbhost = "127.0.0.1";
     private $username = "root";
     private $password = "root";
     private $dbname = "calendar";

    public function connect() {

        // set the host name and database name in a variable
        $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname";

        // create the database connection and assign it to a PHP Data object (PDO)
        $dbConnection = new PDO($mysql_connect_str, $this->username, $this->password);

        // Set Error reporting and throw exceptions on the database connection
        $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // return database connection
        return $dbConnection;
    }
}





















// use \Psr\Http\Message\ServerRequestInterface as Request;
// use \Psr\Http\Message\ResponseInterface as Response;

// require '../../vendor/autoload.php';

// $app = new \Slim\App;

// $servername = "127.0.0.1";
// $username = "root";
// $password = "root";
// $dbname = "calendar";

// // $app-> get('/calendar', function (Request $request, Response $response){

// try {
//     $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
//     // set the PDO error mode to exception
//         $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//         echo "Connected successfully";

//         // $db = new db();

//         // $db = $db->connect();

//         // $sql = "SELECT * FROM calendar";

//         // $stmt = $db->query($sql);

//         // $info = $stmt->fetchAll(PDO::FETCH_OBJ);

//         // $db = null;

//         // echo json_encode($info);
//     }
// catch(PDOException $e)
//     {
//     echo "Connection failed: " . $e->getMessage();
//     }
// });
