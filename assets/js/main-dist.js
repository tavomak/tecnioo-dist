$(function(){$("#selectAllcheckbox").click(function(){$(this).is(":checked")?$(".tecnioo-card").find(".custom-control-input").attr("checked",!0):$(".tecnioo-card").find(".custom-control-input").attr("checked",!1)}),$(".Rut").Rut({on_error:function(){},format_on:"keyup"}),$(".inputsFormulario").rules("add",{required:!0,number:!0,minlength:9,maxlength:9,messages:{required:"Teléfono requerido",minlength:jQuery.validator.format("Por favor ingresa un teléfono de 9 digitos."),maxlength:jQuery.validator.format("Por favor ingresa un teléfono de 9 digitos.")}}),$(".inputsFormulario").on("keyup keypress",function(o){$(this).valid()?(console.log("Validado"),$("#boton_enviar").prop("disabled",!1)):(console.log("No Validado"),$("#boton_enviar").prop("disabled",!0))}),jQuery.extend(jQuery.validator.messages,{required:"Este campo es obligatorio",email:"Por favor ingresa un correo válido.",number:"Please sólo numeros",lettersonly:"Por favor ingresa sólo letras.",digits:"Por favor ingresa sólo números."}),$.validator.addMethod("Rut",function(o,e){return this.optional(e)||$.Rut.validar(o)},"Este campo debe ser un rut valido."),jQuery.validator.addMethod("lettersonly",function(o,e){return this.optional(e)||/^[a-z\s]+$/i.test(o)},"Por favor ingresa sólo letras.")});