<?php
$counterFile  = "counter.txt";
$visitorFile  = "visitors.json";

$ip     = $_SERVER['REMOTE_ADDR'];
$agent  = $_SERVER['HTTP_USER_AGENT'];
$hash   = md5($ip . $agent);

// create files if not exists
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, 0);
}
if (!file_exists($visitorFile)) {
    file_put_contents($visitorFile, json_encode([]));
}

$visitors = json_decode(file_get_contents($visitorFile), true);

// count only if new visitor
if (!in_array($hash, $visitors)) {
    $visitors[] = $hash;

    $count = (int)file_get_contents($counterFile);
    $count++;

    file_put_contents($counterFile, $count);
    file_put_contents($visitorFile, json_encode($visitors));
}

echo file_get_contents($counterFile);
?>
