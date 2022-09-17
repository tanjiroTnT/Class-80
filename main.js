nombre_alumno_array=[];

function submit()
{
    var nombre1=document.getElementById("NombreDeAlumno1").value;
    var nombre2=document.getElementById("NombreDeAlumno2").value;
    var nombre3=document.getElementById("NombreDeAlumno3").value;
    var nombre4=document.getElementById("NombreDeAlumno4").value;

    nombre_alumno_array.push(nombre1);
    nombre_alumno_array.push(nombre2);
    nombre_alumno_array.push(nombre3);
    nombre_alumno_array.push(nombre4);

    console.log(nombre_alumno_array);

    document.getElementById("verNombre").innerHTML=nombre_alumno_array;
    document.getElementById("botonenviar").style.display="none";
    document.getElementById("botonordenar").style.display="inline-block";
}

function sorting()
{
    nombre_alumno_array.sort();
    console.log(nombre_alumno_array);
    document.getElementById("verNombre").innerHTML=nombre_alumno_array;
}