<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    public function getMenus()
    {
        $menus = Menu::getMenuTree();
        return view('layout.header', compact('menus'));
    }
}
