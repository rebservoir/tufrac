<div class="modal fade" id="sitio_edit" role="dialog">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
				<h4 class="modal-title" id="myModalLabel">Modificar Sitio</h4>
			</div>
<div id="msj-success_sitio" class="alert alert-success alert-dismissible hide" role="alert">
  <p>Sitio actualizada exitosamente.</p>
</div>

<div id="msj-fail_sitio" class="alert alert-danger alert-dismissible hide" role="alert">
  <p>Intentar de nuevo.</p>
</div>

			<div class="modal-body">
				{!! Form::open(array('id' => 'actualizar_sitio', 'files' => true)) !!}
					<input type="hidden" name="_token" value="{{ csrf_token() }}" id="token_sitio_1">
					<input type="hidden" value="" id="path_sitio">
					<div class="form-group">
						{!!Form::label('Nombre del Fraccionamiento:')!!}
						{!!Form::text('name',null,['id'=>'name_frac','class'=>'form-control','placeholder'=>'Nombre del fraccionamiento'])!!}
					</div>
					<div class="form-group">
						{!!Form::label('Imagen:')!!}
						{!!Form::file('picture', ['id'=>'picture'])!!}
					</div>
			</div>
				<div class="modal-footer">
						{!!Form::submit('Modificar datos',['class'=>'btn btn-primary'])!!}
				</div>
			{!! Form::close() !!}
		</div>
	</div>
</div>