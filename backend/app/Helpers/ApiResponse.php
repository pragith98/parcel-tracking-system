<?php

namespace App\Helpers;

class ApiResponse {
  public static function error($message, $statusCode = 400) {
    return response()->json([
      'success' => false, 
      'message' => $message
    ], $statusCode);
  }
}