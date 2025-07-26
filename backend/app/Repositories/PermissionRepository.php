<?php

namespace App\Repositories;

use App\Http\Requests\Permission\StorePermissionRequest;
use App\Models\Permission;
use App\Repositories\Interfaces\PermissionRepositoryInterface;
use Exception;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class PermissionRepository implements PermissionRepositoryInterface
{
    private $permission;

    public function __construct(Permission $permission) 
    {
        $this->permission = $permission;
    }

    public function create(StorePermissionRequest $request): Permission
    {
        try {
            $validatedData = $request->validated();

            $data = [
                'name' => strtoupper($validatedData['name']),
                'userRoleId' => $validatedData['userRoleId'],
            ];

            return $this->permission->create($data);
        } catch (Exception $e) {
            throw new Exception("Failed to create permission.", 500);
        }
    }


    public function delete(string $id): bool
    {
        try {
            $permission = $this->permission->findOrFail($id);

            $permission->delete();
            return true;
        } catch (ModelNotFoundException $e) {
            throw new Exception("Permission with ID {$id} not found.", 404);
        } catch (Exception $e) {
            throw new Exception("Failed to delete permission.", 500);
        }
    }
}