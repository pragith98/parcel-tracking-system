<?php

namespace App\Repositories;

use App\Http\Requests\Auth\LoginRequest;
use App\Repositories\Interfaces\AuthRepositoryInterface;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class AuthRepository implements AuthRepositoryInterface
{
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (Auth::attempt([
            'username' => $credentials['username'], 
            'password' => $credentials['password']])
        ) {
            /** @var \App\Models\MyUserModel $user **/
            $user = Auth::user();

            $token = $user->createToken('auth_token')->plainTextToken;

            // Set the token in an HTTP-only cookie
            $cookie = cookie('auth_token', $token, 60 * 24 * 7, null, null, false, true); // 1 week
            
            $user->userRole->permissions;
            return response($user)->withCookie($cookie);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function getUser()
    {
        $user = Auth::user();

        if (!$user) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $user->userRole->permissions;
        return response($user);
    }

    public function logout(Request $request)
    {
        if ($request->user()) {
            // Delete the user's tokens
            $request->user()->tokens()->delete();
    
            // Remove the HTTP-only cookie
            $cookie = Cookie::forget('auth_token', null, null, '/', null, false, true);
    
            return response()->json(['message' => 'Logged out'])->withCookie($cookie);
        }

        return response()->json(['message' => 'No authenticated user'], 401);
    }
}
