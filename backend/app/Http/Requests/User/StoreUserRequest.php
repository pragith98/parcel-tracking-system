<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Validation\Rule;
use Illuminate\Contracts\Validation\Validator;

class StoreUserRequest extends FormRequest
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
            'name' => ['required','max:255'],
            'username' => [
                'required',
                'max:255',
                Rule::unique('users', 'username')
            ],
            'email' => [
                'required',
                'email',
                'max:255',
                Rule::unique('users', 'email')
            ],
            'telephone' => [
                'required',
                'max:10',
                Rule::unique('users', 'telephone')
            ],
            'nic' => [
                'required',
                'max:12',
                Rule::unique('users', 'nic')
            ],
            'address' => ['required','max:255'],
            'password' => ['required','max:255']
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        // Get validation errors as a flat array
        $errors = $validator->errors()->all();

        throw new HttpResponseException(response()->json(['errors' => $errors], 422));
    }
}
