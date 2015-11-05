@extends('admin.admin')

	@include('alerts.success')
	@include('admin.modal.util_edit')
	@include('admin.modal.util_create')
	@include('admin.modal.noticia_create')
	@include('admin.modal.noticia_edit')

	@section('content')

	<div class="cont_left cont_600 col-lg-4">
						
						<div class="box_header">
							{!!Html::image('img/n_3.png')!!}
							<h1>Contenidos</h1>
						</div>
						
						<ul id="ul_interna">
							<li id="int_l1" class="left_sel">	<p>Noticias</p></li>
							<li id="int_l2">					<p>Morosos</p></li>
							<li id="int_l3">					<p>Teléfonos y Sitios Útiles</p></li>
							<li id="int_l4">					<p>Configurarión del sitio</p></li>
						</ul>
						
					</div>

					<div class="cont_right col-lg-8">

						<div id="int_div1" class="int_div_sel">
							<div class="box_header">
								<p>Contenidos > Creación de Noticias</p>
							</div>
						
							<div class="cont_in_r">
								@include('admin/noticia_create')
							</div>
						</div>

						<div id="int_div2" class="int_div">
							<div class="box_header">
								<p>Contenidos > Morosos</p>
							</div>
						
							<div class="cont_in_r">
								@include('../admin/morosos')
							</div>
						</div>

						<div id="int_div3" class="int_div">
							<div class="box_header">
								<p>Contenidos > Teléfonos y Sitios Útiles</p>
							</div>
						
							<div class="cont_in_r">
								@include('admin/utiles_create')
							</div>
						</div>

						<div id="int_div3" class="int_div">
							<div class="box_header">
								<p>Contenidos > Configuración del sitio</p>
							</div>
						
							<div class="cont_in_r">
								<p>slider</p>
								<p>nombre del sitio</p>
							</div>
						</div>

					</div> <!-- END cont_right -->

	@stop

	@section('script')
		{!!Html::script('js/util.js')!!}
	@stop