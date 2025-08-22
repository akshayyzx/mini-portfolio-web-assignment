<?php
// --- Always respond JSON ---
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");

// Handle preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Only POST requests allowed']);
    exit;
}

// Get POST data (support both JSON + form-data)
$raw = file_get_contents('php://input');
$data = [];
if (!empty($raw) && strpos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') !== false) {
    $data = json_decode($raw, true) ?: [];
} else {
    $data = $_POST;
}

// Extract values
$name    = trim($data['name'] ?? '');
$email   = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');

// Basic validation
if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['success' => false, 'error' => 'All fields are required']);
    exit;
}

// Save to file (append line)
$dir = __DIR__ . '/../data';
if (!is_dir($dir)) mkdir($dir, 0777, true);

$file = $dir . '/submissions.txt';
$entry = sprintf("[%s] %s | %s | %s%s", date('Y-m-d H:i:s'), $name, $email, $message, PHP_EOL);
file_put_contents($file, $entry, FILE_APPEND);

// Respond success JSON
echo json_encode([
    'success' => true,
    'data' => ['name' => $name, 'email' => $email, 'message' => $message]
]);
