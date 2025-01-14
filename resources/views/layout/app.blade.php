<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@if(View::hasSection('title'))@yield('title') | {{ config('app.name') }}@else{{ config('app.name') }}@endif</title>
    <meta name="keywords" content="Professional Cleaning Services, Commercial Cleaning, Residential Cleaning, Office Cleaning, Deep Cleaning, Sanitization Services, Disinfection, House Cleaning, Carpet Cleaning, Window Cleaning, Floor Cleaning, Green Cleaning Solutions, Eco-friendly Cleaning, Regular Cleaning, One-time Cleaning, Emergency Cleaning, Professional Cleaners, Reliable Service, Customer Satisfaction, Quality Cleaning">
    <meta property="og:title" content="@yield('og_title', 'CleanPro Services - Professional Cleaning Solutions')">
    <meta property="og:description" content="@yield('og_description', 'CleanPro Services offers comprehensive cleaning solutions for homes and businesses. Our professional team delivers exceptional cleaning services with eco-friendly products, ensuring a spotless and healthy environment for our clients.')">
    <meta property="og:type" content="website">
    <meta property="og:url" content="@yield('og_url', config('app.url'))">
    <meta property="og:image" content="@yield('og_image', asset('images/logo/cleanpro-logo.png'))">
    @vite([
        'resources/css/app.css',
        'resources/js/app.js',
        'resources/css/style.css'
    ])
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
    @yield('styles')
</head>
<body>
    <div class="">
        @include('layout.header')
        @yield('content')
        @include('layout.footer')
    </div>
    @yield('scripts')
</body>
</html>