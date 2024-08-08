<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ableEditJawaban
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = auth()->user();
        // return response($user);
        if($user->role_id != 1 && $user->role_id != 3){
            // abort(403, 'Tidak diizinkan masuk.');
            return response("tidak Diizinkan Masuk",403);
        }
        return $next($request);
    }
}
