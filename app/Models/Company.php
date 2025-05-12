<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'logo',
        'description',
        'vision',
        'mission',
        'established_date',
        'address',
        'phone',
        'email',
        'website',
        'social_media_links',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'established_date' => 'date',
        'social_media_links' => 'array',
    ];

    /**
     * Get the logo URL attribute.
     *
     * @return string
     */
    public function getLogoUrlAttribute()
    {
        return $this->logo ? asset('storage/' . $this->logo) : asset('img/default-logo.png');
    }
}