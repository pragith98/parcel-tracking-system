<?php

namespace App\Http\Requests\Parcel;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StoreParcelRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'remarks' => ['nullable','max:255'],
            'receiverName' => ['required','max:255'],
            'receiverTelephone' => ['required','max:10'],
            'receiverAddress' => ['required','max:255'],
            'receiverEmail' => ['required','email','max:255'],
            'senderName' => ['required','max:255'],
            'senderTelephone' => ['required','max:10'],
            'senderAddress' => ['required','max:255'],
            'senderEmail' => ['required','email','max:255'],
            'estimatedDeliveryDate' => ['nullable']
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        // Get validation errors as a flat array
        $errors = $validator->errors()->all();

        throw new HttpResponseException(response()->json(['errors' => $errors], 422));
    }
}
