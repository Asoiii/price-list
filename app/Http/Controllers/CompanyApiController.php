<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CompanyApiController extends Controller
{
    /**
     * Get company data
     *
     * @return \Illuminate\Http\Response
     */
    public function getCompany()
    {
        $company = Company::first();
        
        if ($company) {
            // Tambahkan URL lengkap untuk logo
            $company->logo_url = $company->logo ? url('storage/' . $company->logo) : null;
        }
        
        return response()->json([
            'success' => true,
            'data' => $company
        ]);
    }

    /**
     * Update company data
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateCompany(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'logo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'description' => 'nullable|string',
            'vision' => 'nullable|string',
            'mission' => 'nullable|string',
            'established_date' => 'nullable|date',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:20',
            'email' => 'nullable|email|max:255',
            'website' => 'nullable|url|max:255',
            'social_media_links' => 'nullable|array',
        ]);

        $company = Company::first();
        
        if (!$company) {
            $company = new Company();
        }

        // Handle logo upload
        if ($request->hasFile('logo')) {
            if ($company->logo) {
                Storage::delete('public/' . $company->logo);
            }
            
            $logoPath = $request->file('logo')->store('logos', 'public');
            $company->logo = $logoPath;
        }

        $company->name = $request->name;
        $company->description = $request->description;
        $company->vision = $request->vision;
        $company->mission = $request->mission;
        $company->established_date = $request->established_date;
        $company->address = $request->address;
        $company->phone = $request->phone;
        $company->email = $request->email;
        $company->website = $request->website;
        $company->social_media_links = $request->social_media_links;
        
        $company->save();

        return response()->json([
            'success' => true,
            'message' => 'Company updated successfully',
            'data' => $company
        ]);
    }
}