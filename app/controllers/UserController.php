<?php
/**
 * User: Gabriel Acosta
 * Date: 11/20/13
 * Time: 8:46 AM
 */

class UserController extends BaseController {

    protected $user;

    public function __construct(User $user){
        $this->user = $user;
    }

    public function index(){
        $users = $this->user->all();

        return Response::json(
            $users->toArray(),
            '200'
        );
    }

    public function store(){

        $this->user->username = Input::get('username');

        $this->user->email    = Input::get('email');

        if($this->user->save()){

            return Response::json(

                $this->user->toArray(),

                '200'

            );
        }

    }

    public function show( $id ){
        $user = $this->user->find($id);

        return Response::json(

            $user->toArray(),

            '200'
        );
    }

    public function update($id){
        $user = $this->user->find($id);

        $user->username = Input::get('username');
        $user->email = Input::get('email');

        if($user->save()){
            return Response::json(
                $user->toArray(),
                '200'
            );
        }
    }

    public function destroy($id){
        $user = $this->user->find($id);

        if($user->delete()){

            return Response::json(
                array(
                    'message' => 'DELETE OK'
                )
            );
        }

    }



}