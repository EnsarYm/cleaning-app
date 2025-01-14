@extends('layout.app')
@section('title') {{ __('message.home') }} @endsection
@section('content')
    <!-- Hero Section -->
    <div class="relative min-h-screen flex items-center justify-center">
        <div class="text-center">
            <h1 class="text-4xl md:text-6xl font-bold text-gray-900">
                <!-- Hero başlığı buraya -->
                <i data-lucide="home" class="inline-block w-12 h-12 text-primary-500"></i>
                Hoş Geldiniz
            </h1>
            <div class="mt-4 text-xl text-gray-600 flex items-center justify-center gap-2">
                <!-- Alt başlık buraya -->
                <i data-lucide="check-circle" class="w-6 h-6 text-green-500"></i>
                Profesyonel Hizmet
            </div>
        </div>
    </div>
@endsection