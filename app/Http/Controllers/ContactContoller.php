<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact;

class ContactContoller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Contact::orderBy('created_at', 'desc');

        if ($request->q) {
            $query->where('name', 'ilike', "%$request->q%")->orWhere('phone', 'ilike', "%$request->q%");
        }

        return inertia('Contact/Index', [
            'contacts' => $query->paginate(5)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return inertia('Contact/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|numeric'
        ]);

        Contact::create($request->input());

        return redirect()->route('contacts.index')->with('success', 'Contact Created');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        return inertia('Contact/Edit', ['contact' => $contact]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        $request->validate([
            'name' => 'required|string',
            'phone' => 'required|numeric'
        ]);

        $contact->update($request->input());

        return redirect()->route('contacts.index')->with('success', 'Contact Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        $contact->delete();

        return redirect()->route('contacts.index')->with('success', 'Contact Deleted');
    }
}
