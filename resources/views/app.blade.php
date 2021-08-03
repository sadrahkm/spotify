<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet">
    <link
        href="{{ asset('css/app.css') }}"
        rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap"
        rel="stylesheet">
    <link
        href="{{ mix('/css/app.css') }}"
        rel="stylesheet"/>
    <script
        src="{{ mix('/js/app.js') }}"
        defer></script>
</head>
<body class="antialiased">
@inertia
</body>
</html>
