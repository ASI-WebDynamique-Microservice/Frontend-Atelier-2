$(document).ready(function(){
    // var postUrl = 'http://localhost:8083/addUser'; // Stocke l'URL dans une variable
    var postUrl = 'http://tp.cpe.fr:8083/user/99'; // Stocke l'URL dans une variable

    $(".ui.form").on('submit', function(event){
        event.preventDefault();
        
        // Récupère toutes les valeurs du formulaire
        var formData = $(this).serializeArray();

        // Transforme le tableau en objet pour une utilisation plus facile
        var data = {};
        $(formData).each(function(index, obj){
            data[obj.name] = obj.value;
        });

        // // Crée un nouvel objet avec le format attendu par l'API
        // var apiData = {
        //     username: data['username'],
        //     name: data['name'],
        //     surname: data['surname'],
        //     password: data['pwd']
        // };
        // Crée un nouvel objet avec le format attendu par l'API
        var apiData = {
            login: data['username'],
            pwd: data['pwd'],
            lastName: data['surname'],
            surName: data['name']
        };

        // Envoi des données en POST
        $.ajax({
            url: postUrl,
            type: 'PUT',
            data: JSON.stringify(apiData),
            contentType: 'application/json',
            success: function(data){
                console.log(data);
                window.location.href = "http://localhost:8080/pages/login.html";
            },
            error: function(err){
                console.log('Erreur:', err);
                console.log('Détails de l\'erreur:', err.responseText);
            },
        });
    });
});