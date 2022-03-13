$('#gen').click(() => {
    console.log('rybnzdxhrtdxnyb');
    var scriptInside = btoa("if(new Date()>new Date('{{TIME}}'))setTimeout(()=>document.body.innerHTML='time expired', 1000);".replace('{{TIME}}', $('#in').val()));
    scriptInside = `eval(atob('${scriptInside}'))`;
    var result = `<script defer>${scriptInside}</script>`;
    $('#out').val(result);
});