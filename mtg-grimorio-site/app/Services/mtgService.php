<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;

class mtgService {

    public function getCardsSetsData() {
        $data = Http::accept('application/json')->get('https://api.magicthegathering.io/v1/sets')->json();
        return !empty($data) ? $data['sets'] : [];
    }

    public function getCardsBySetCode(String $code) {
        $data = Http::accept('application/json')->get("https://api.magicthegathering.io/v1/sets/{$code}")->json();
        return !empty($data) ? $data['set'] : [];
    }
}