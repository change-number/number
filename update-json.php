php
<?php
$text = $_POST['text'];

$jsonFile = file_get_contents('data.json');
$data = json_decode($jsonFile, true);

$data['field'] = $text;

file_put_contents('data.json', json_encode($data));

echo "JSON updated successfully";
?>