<!DOCTYPE html>
<html>
<head>
    <title>Welcome to Our Application</title>
</head>
<body>
    <h1>Welcome, {{ $user->name }}!</h1>
    <p>Thank you for registering with us. Your account has been successfully created.</p>
    <p>Email: {{ $user->email }}</p>
    <p>We’re excited to have you on board!</p>
</body>
</html>