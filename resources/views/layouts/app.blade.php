<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"/>
    <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet">
    <link
        href="{{ asset('css/app.css') }}"
        rel="stylesheet">
    <title>Spotify</title>
</head>
<body>
<div>
    <div class="h-screen">
        <div class="h-5/6">
            <div class="grid grid-cols-10 h-full">
                <div class="bg-black col-span-2 h-full pt-6">
                    <div class="px-8">
                        <div class="pb-6 border-b border-white border-opacity-20">
                            <div class="flex flex-col">
                                <nav class="opacity-70 space-y-3 text-lg text-white">
                                    <div class="flex items-center">
                                        <i class="fas fa-home"></i>
                                        <p class="ml-3.5">Home</p>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-search"></i>
                                        <p class="ml-3.5">Search</p>
                                    </div>
                                    <div class="flex items-center">
                                        <i class="fas fa-bookmark"></i>
                                        <p class="ml-3.5">Your Library</p>
                                    </div>
                                </nav>
                            </div>
                            <div class="mt-10 text-white space-y-3">
                                <div class="flex items-center opacity-70">
                                    <div class="bg-white ml-0.5 px-2 py-0.5 rounded-sm">
                                        <i class="fa-plus fas text-sm text-black"></i>
                                    </div>
                                    <p class="ml-3.5">Create Playlist</p>
                                </div>
                                <div class="flex items-center opacity-70">
                                    <div class="bg-gradient-to-br from-purple-light px-2 py-1 rounded-sm to-white">
                                        <i class="fas fa-heart text-sm text-white"></i>
                                    </div>
                                    <p class="ml-3.5">Liked Songs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-white text-opacity-70 pl-8 max-h-56 overflow-y-scroll">
                        <ul class="py-3 space-y-1.5">
                            <li>Music</li>
                            <li>Dance</li>
                            <li>Dance</li>
                            <li>Dance</li>
                            <li>Dance</li>
                            <li>Dance</li>
                            <li>Dance</li>
                            <li>Dance</li>
                            <li>Party</li>
                            <li>Party</li>
                            <li>Party</li>
                            <li>Party</li>
                            <li>Party</li>
                            <li>Discover Weekly</li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-8 bg-darkgray-800 h-full px-8 py-16 overflow-y-scroll">
                    <div>
                        <div>
                            <h2 class="text-white text-3xl mb-8 font-bold">Good Afternoon</h2>
                            <div class="font-bold gap-x-6 gap-y-4 grid grid-cols-3 text-white">
                                @for($i = 0; $i < 6; $i++)
                                    <div class="bg-opacity-10 bg-white flex h-20 items-center rounded-sm">
                                        <img
                                            class="h-full mr-4 rounded-sm"
                                            src="/images/cover.jpg"
                                            alt="">
                                        Summer Hits
                                    </div>
                                @endfor
                            </div>
                        </div>
                        @for($j = 0; $j < 4; $j++)
                            <div class="mt-10">
                                <div class="flex justify-between text-white mb-4 items-center">
                                    <h2 class="text-xl font-bold">Your Top Shows</h2>
                                    <p class="text-sm font-semibold opacity-70">SEE ALL</p>
                                </div>
                                <div class="gap-x-5 grid grid-cols-5">
                                    @for($i = 0; $i < 5; $i++)
                                        <div class="bg-darkgray-600 bg-opacity-20 border border-darkgray-600 flex justify-center pb-8 pt-4 rounded-md shadow-md">
                                            <div class="flex flex-col items-center px-4 text-white">
                                                <img
                                                    class="mb-4 rounded-lg w-full"
                                                    src="/images/cover.jpg"
                                                    alt="">
                                                <div>
                                                    <h4 class="font-bold">All Ears English Podcast</h4>
                                                    <p class="text-sm">All Ears English</p>
                                                </div>
                                            </div>
                                        </div>
                                    @endfor
                                </div>
                            </div>
                        @endfor
                    </div>
                </div>
            </div>
        </div>
        @include('partials._footer')
    </div>
</div>
</body>
</html>
