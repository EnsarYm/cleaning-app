<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    protected $fillable = ['title', 'url', 'parent_id', 'sort_order'];

    public function children()
    {
        return $this->hasMany(Menu::class, 'parent_id')->orderBy('sort_order');
    }

    public function parent()
    {
        return $this->belongsTo(Menu::class, 'parent_id');
    }

    public static function getMenuTree()
    {
        return self::where('parent_id', 0)
            ->with('children')
            ->orderBy('sort_order')
            ->get();
    }
}
