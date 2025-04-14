<?php

namespace App\Http\Controllers;

use App\Services\mtgService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CardsSetController extends Controller
{
    public function index(): Response
    {
        $service = new mtgService();
        $data = $service->getCardsSetsData();
        $newData = array_slice($data, 0, 100);
        return Inertia::render('CardsSet/Index', [
            'data' => $newData
        ]);
    }

    public function show($code): Response
    {
        $service = new mtgService();
        $item = $service->getCardsBySetCode($code);
        return Inertia::render('CardsSet/Show', [
            'item' => $item
        ]);
    }
}