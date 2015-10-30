@extends('admin.admin')

	@include('alerts.success')
	@include('admin.modal.user_create')
	@include('admin.modal.user_edit')

	@section('content')

	<div class="cont_left col-lg-12">		
		<div class="box_header">
			{!!Html::image('img/n_3.png')!!}
			<h1>Usuarios</h1>
		</div>	
			<button value='' OnClick='' class='btn btn-primary' data-toggle="modal" data-target="#user_create">Registrar un Nuevo Usuario</button>
		<br><br>
		<br><br>

		<div id="tablaUsuarios">
			@include('usuario.usuarios')
		</div>

	</div>

	@stop

	@section('script')
		{!!Html::script('js/user.js')!!}
	@stop