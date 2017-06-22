<?php
require_once 'config.php';
$mysql = new Mysqli(
        $host,
        $username,
        $password,
        $database
    );

$result = $mysql->query('SELECT * FROM games');

$games = [];
while($row = $result->fetch_assoc()) {
    $games[] = $row;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Game projects 2015 2016</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    
    <?php
    foreach ($games as $game) {
        foreach ($game as $key => $value) {
            $$key = $value;
        }
        include('thumbnail.php');
        
    }   
    ?>
    <script src="main.js"></script>
</body>

</html>