<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\Models\Task;

class TaskController extends Controller {

    // public function userRegisteration(Request $request) {
    //     $results = \App\Model\Task::create([
    //                 'name' => $request->name,
    //                 'email' => $request->email,
    //                 'password' => bcrypt($request->password),
    //     ]);
    //     return response()->json(['success' => true, 'message' => 'User created successfully', 'data' => $results]);
    // }
	
	public function taskGets(){
		$results = Task::all();
		return $results;
	}
	
	// public function deleteUser($id){
	// 	$results = \App\User::where('id',$id)->first();
	// 	if($results->delete()){
	// 		return "true";
	// 	}else{
	// 		return "false";
	// 	}
	// }
	
	// public function editUserById($id){
	// 	$results = \App\User::where('id',$id)->first();
	// 	return $results;
	// }
	
	// public function updateUser(Request $request) {
	// 	$post = $request->all();
	// 	$id = $post['userId'];
    //     $results = \App\User::where('id',$id);
	// 	$results->name = $post['name'];
	// 	$results->email = $post['email'];
	// 	$results->save();
    //     return response()->json(['success' => true, 'message' => 'User updated successfully', 'data' => $results]);
    // }

}
