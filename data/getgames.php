<?php
require_once 'config.php';

try {
    $mysql = new Mysqli(
        $host,
        $username,
        $password,
        $database
    );
} catch (Exception $e) {
    header("HTTP/1.1 500 Internal Server Error");
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit;
}

$result = $mysql->query('SELECT * FROM games');

$games = [];
while($row = $result->fetch_assoc()) {
    $games[] = $row;
}

$mysql->close();
$result->close();

// teruggeven als JSON
header("Content-Type: application/json");
echo json_encode($games);
?>