<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class User extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);
        $user = \App\Models\User::where('username', $request->username)->first();
        if (!$user) {
            throw ValidationException::withMessages([
                'username' => 'Tài khoản không tồn tại',
            ]);
        }
        if (!$user->hasRole('ADMIN') && $user->active == 0) {
            throw ValidationException::withMessages([
                'username' => 'Tài khoản chưa được kích hoạt',
            ]);
        }
        $credentials = [
            'username' => $request->username,
            'password' => $request->password,
        ];
        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            return redirect()->intended('/manage');
        }
        throw ValidationException::withMessages([
            'username' => 'Mật khẩu không đúng',
        ]);
    }
}
